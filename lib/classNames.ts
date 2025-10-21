export type ClassValue =
  | string
  | number
  | bigint
  | null
  | false
  | undefined
  | ClassDictionary
  | ClassArray;

interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}

type ClassArray = Array<ClassValue>;

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === "string" || typeof input === "number") {
      classes.push(String(input));
      continue;
    }

    if (Array.isArray(input)) {
      const inner = cn(...input);
      if (inner) classes.push(inner);
      continue;
    }

    if (typeof input === "object") {
      for (const [key, value] of Object.entries(input)) {
        if (value) classes.push(key);
      }
    }
  }

  return classes.join(" ");
}
