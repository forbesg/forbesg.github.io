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
        category: z.enum(['website', 'ecommerce', 'web-application', 'blackberry']),
        image: z.string(),
        imageAlt: z.string(),
        // Optional transparent-background version of `image` for device mockups
        mockup: z.string().optional(),
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
        shortTitle: z.string(),
        summary: z.string(),
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

    // content/toolbox.yml: the tools list on the About page
    toolbox: defineCollection({
      type: 'data',
      source: 'toolbox.yml',
      schema: z.object({
        title: z.string(),
        intro: z.string(),
        groups: z.array(
          z.object({
            name: z.string(),
            tagline: z.string(),
            icon: z.enum(['layout', 'database', 'cart', 'rocket', 'archive']),
            retired: z.boolean().default(false),
            tools: z.array(z.string()),
          }),
        ),
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
        x: z.string().optional(),
        links: z.array(z.string()).default([]),
        favoriteFoods: z.array(z.string()).default([]),
        interests: z.array(z.string()).default([]),
      }),
    }),
  },
})
