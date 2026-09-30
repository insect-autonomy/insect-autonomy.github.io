import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  // October 1 is daylight saving time in Pittsburgh (UTC-04:00).
  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Insect-scale Autonomy Workshop//IROS 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:iros2026-workshop@insect-autonomy.github.io",
    "DTSTAMP:20260929T000000Z",
    "DTSTART:20261001T123000Z",
    "DTEND:20261001T213500Z",
    "SUMMARY:IROS 2026 Insect-scale Autonomy Workshop",
    "LOCATION:Room 334\\, David L. Lawrence Convention Center\\,",
    "  Pittsburgh",
    "DESCRIPTION:October 1\\, 2026. 8:30 AM-5:35 PM Pittsburgh time (ET).",
    " \\nProgram: https://insect-autonomy.github.io/program/",
    "URL:https://insect-autonomy.github.io/program/",
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");

  return new Response(calendar, {
    headers: { "Content-Type": "text/calendar; charset=utf-8" },
  });
};
