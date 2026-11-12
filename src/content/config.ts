import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      readingTime: z.string().optional(),
    }),
});

export const PROJECT_LAYERS = [
  "RF",
  "PCB",
  "Firmware",
  "TinyML",
  "Networking",
  "Linux/Android",
  "Go",
  "Web",
  "Infra",
] as const;

const figure = z.object({
  src: z.string(), // path under public/, e.g. /assets/work/akpa-receipt.jpg
  alt: z.string(),
  caption: z.string().optional(),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one sentence
    layers: z.array(z.enum(PROJECT_LAYERS)).min(1),
    year: z.number().int(),
    status: z.enum(["live", "shipped", "in-progress"]),
    cover: z.string().optional(), // path under public/
    coverAlt: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    // Case-study extras. Anything left out is skipped on the page.
    receipt: figure.optional(), // "The receipt" hero photo
    numbers: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .default([]),
    stack: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]), // blog post slugs
    // Slug of a bigger project this one is a piece of. The parent's page
    // lists its parts, and this one says what it belongs to.
    partOf: z.string().optional(),
  }),
});

export const collections = { blog, projects };
