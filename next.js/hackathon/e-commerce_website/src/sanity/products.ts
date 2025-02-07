const products = {
    name: 'products',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: (input: string) => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: "mainImg",
            title: "Main Image",
            type: "image",
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: "alt",
                title: "Alt Text",
                type: "string",
                description: "Alternative text for screen readers and SEO.",
              },
            ],
          },
    ]
}

export default products