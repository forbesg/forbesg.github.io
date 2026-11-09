import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Each Markdown file's path in content/ becomes its URL, so the folder layout
// mirrors the old Gridsome routes (e.g. content/blog/foo.md -> /blog/foo/).

const imageRef = z.object({ src: z.string(), alt: z.string() })

export default defineContentConfig({
  collections: {
    // Standalone page copy: content/about.md, home.md, services.md
    pages: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        subhead: z.string().optional(),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
      }),
    }),

    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        subhead: z.string().optional(),
        image: z.string(),
        imageAlt: z.string(),
        tags: z.array(z.string()).default([]),
        author: z.string(),
        date: z.date(),
      }),
    }),

    projects: defineCollection({
      type: 'page',
      source: 'portfolio/**/*.md',
      schema: z.object({
        subhead: z.string(),
        category: z.enum(['website', 'web-application', 'blackberry']),
        image: z.string(),
        imageAlt: z.string(),
        url: z.string().optional(),
        repo: z.string().optional(),
        features: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        displayOrder: z.number().default(99),
        fullImage: imageRef.optional(),
        carousel: z.array(imageRef).optional(),
      }),
    }),

    services: defineCollection({
      type: 'page',
      source: 'services/*.md',
      schema: z.object({
        subtitle: z.string(),
        icon: imageRef,
        bannerImage: imageRef,
        intro: z
          .object({
            video: z.object({ src: z.string() }).nullish(),
            image: z.string().nullish(),
          })
          .optional(),
        featureColumns: z
          .array(z.object({ title: z.string(), content: z.string(), image: imageRef }))
          .default([]),
        pricing: z.object({ title: z.string(), introText: z.string().optional() }).optional(),
        packages: z
          .array(
            z.object({
              name: z.string(),
              features: z.array(z.string()),
              price: z.string().optional(),
              priceFrom: z.string().optional(),
            }),
          )
          .default([]),
        featureWide: z
          .object({
            image: imageRef,
            text: z.object({
              title: z.string(),
              body: z.string(),
              button: z.object({ link: z.string(), text: z.string() }),
            }),
          })
          .optional(),
      }),
    }),

    team: defineCollection({
      type: 'page',
      source: 'meet-the-team/*.md',
      schema: z.object({
        name: z.string(),
        position: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        twitter: z.string().optional(),
        links: z.array(z.string()).default([]),
        favoriteFoods: z.array(z.string()).default([]),
        interests: z.array(z.string()).default([]),
      }),
    }),
  },
})
