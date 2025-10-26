"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./HelsinkiClock.module.css";

const timezone = "Europe/Helsinki";

const localeCityKey = (locale: string) => {
  const base = locale.split("-")[0];
  if (base === "fi") return "helsinkiFI";
  if (base === "sv") return "helsinkiSV";
  return "helsinki";
};

const HelsinkiClock: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [now, setNow] = React.useState<Date>(() => new Date());

  React.useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  const locale = i18n.language || "en";

  const time = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timezone,
  }).format(now);

  const weekday = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    timeZone: timezone,
  }).format(now);

  const city = t(localeCityKey(locale));

  return (
    <div className={styles.clock}>
      <span className={styles.dot} aria-hidden />
      <span>
        {city} · {weekday}, {time}
      </span>
    </div>
  );
};

export default HelsinkiClock;
