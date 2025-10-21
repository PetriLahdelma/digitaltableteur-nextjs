import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  interests: string[];
  message: string;
  locale?: string;
  consent?: boolean;
};

const { MONGODB_URI, MONGODB_DB } = process.env;

let mongoClientPromise: Promise<MongoClient> | null = null;

async function getMongoClient() {
  if (!MONGODB_URI) return null;
  if (!mongoClientPromise) {
    mongoClientPromise = MongoClient.connect(MONGODB_URI);
  }
  return mongoClientPromise;
}

function sanitizeValue(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function validate(payload: Partial<ContactPayload>) {
  const errors: Record<string, string> = {};

  const name = sanitizeValue(payload.name);
  if (!name) {
    errors.name = "Name is required";
  }

  const email = sanitizeValue(payload.email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Invalid email";
  }

  const message = sanitizeValue(payload.message);
  if (!message) {
    errors.message = "Message is required";
  }

  const interests = Array.isArray(payload.interests)
    ? payload.interests.filter((interest) => typeof interest === "string")
    : [];

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data: {
      name,
      email,
      phone: sanitizeValue(payload.phone),
      interests,
      message,
      locale: sanitizeValue(payload.locale) || "en",
      consent: Boolean(payload.consent),
    },
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { isValid, errors, data } = validate(body);

    if (!isValid) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const client = await getMongoClient();

    if (client && MONGODB_DB) {
      const db = client.db(MONGODB_DB);
      const collection = db.collection("leads");
      await collection.insertOne({
        ...data,
        createdAt: new Date(),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("save-contact error", error);
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }
}
