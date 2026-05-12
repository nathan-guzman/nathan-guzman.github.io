import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    tools: z.array(z.string()),
    role: z.string(),
    year: z.string(),
    order: z.number(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .default([]),
    pullQuote: z.string().optional(),
    visualVariant: z.enum(['phone-iframe', 'phone-video', 'wide-iframe', 'vimeo', 'static-image']),
    visualSrc: z.string(),
    visualAlt: z.string().optional(),
    visualPoster: z.string().optional(),
    vimeoId: z.string().optional(),
    iframePermissions: z.string().optional(),
    visualSide: z.enum(['left', 'right']).default('left'),
    variantNote: z.string().optional(),
    compact: z.boolean().default(false),
  }),
});

export const collections = { projects };
