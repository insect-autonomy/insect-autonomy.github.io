import { defineCollection, z } from "astro:content";

const person = z.object({
  name: z.string(),
  affiliation: z.string(),
  status: z.string(),
  photo: z.string(),
  website: z.string().optional(),
  scholar: z.string().optional(),
  linkedin: z.string().optional(),
  twitter: z.string().optional(),
  talkTitle: z.string().optional(),
  abstract: z.string().optional(),
  abstractCredit: z.string().optional(),
  bio: z.string().optional(),
});

const organizer = z.object({
  name: z.string(),
  affiliation: z.string(),
  photo: z.string(),
  website: z.string().optional(),
  labWebsite: z.string().optional(),
  scholar: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  lab: z.string().optional(),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    updated: z.string().optional(),

    // speakers page extras (optional for other pages)
    confirmed: z.array(person).optional(),
    pending: z.array(person).optional(),

    // organizers page extras
    organizers: z.array(organizer).optional(),
  }),
});

export const collections = { pages };
