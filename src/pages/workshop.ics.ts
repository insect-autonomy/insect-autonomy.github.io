import type { APIRoute } from "astro";
import program from "../content/pages/program.md?raw";

const plainText = (html: string) => html
  .replace(/<br\s*\/?\s*>/gi, "\n")
  .replace(/<\/li>/gi, "\n")
  .replace(/<[^>]+>/g, "")
  .replace(/&amp;/g, "&")
  .replace(/[ \t]+/g, " ")
  .replace(/ *\n */g, "\n")
  .trim();

const escapeText = (value: string) => value.replace(/\\/g, "\\\\")
  .replace(/\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");

// RFC 5545 limits physical lines to 75 UTF-8 octets.
const foldLine = (line: string) => {
  let result = "", width = 0;
  for (const char of line) {
    const bytes = new TextEncoder().encode(char).length;
    if (width + bytes > 75) { result += "\r\n "; width = 1; }
    result += char;
    width += bytes;
  }
  return result;
};

const utcTime = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  return `20261001T${String(hour + 4).padStart(2, "0")}${String(minute).padStart(2, "0")}00Z`;
};

export const GET: APIRoute = () => {
  // October 1 is daylight saving time in Pittsburgh (UTC-04:00).
  const events: string[] = [];
  for (const row of program.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)) {
    const cells = [...row[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/g)].map(match => plainText(match[1]));
    if (cells.length !== 3) continue;
    const [time, item, notes] = cells;
    const [heading, ...details] = item.split("\n");
    if (heading === "Break" || heading.startsWith("Lunch")) continue;
    const title = heading.replace("Coffee Break + ", "");
    const [start, end] = time.split("–");
    events.push(
      "BEGIN:VEVENT",
      `UID:iros2026-${start.replace(":", "")}@insect-autonomy.github.io`,
      "DTSTAMP:20260930T120000Z",
      `DTSTART:${utcTime(start)}`,
      `DTEND:${utcTime(end)}`,
      `SUMMARY:${escapeText(`Insect-scale Autonomy: ${title}`)}`,
      `LOCATION:${escapeText(`${title === "Poster Session" ? "Outside " : ""}Room 334, David L. Lawrence Convention Center, Pittsburgh`)}`,
      `DESCRIPTION:${escapeText([...details, notes, "Program: https://insect-autonomy.github.io/program/"].filter(Boolean).join("\n\n"))}`,
      "URL:https://insect-autonomy.github.io/program/",
      "END:VEVENT",
    );
  }
  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Insect-scale Autonomy Workshop//IROS 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    ...events,
    "END:VCALENDAR",
    "",
  ].map(foldLine).join("\r\n");

  return new Response(calendar, {
    headers: { "Content-Type": "text/calendar; charset=utf-8" },
  });
};
