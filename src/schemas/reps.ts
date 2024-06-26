export default {
  name: 'reps',
  title: 'Reps',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Branch', value: 'branch' },
          { title: 'Processing', value: 'processing' },
          { title: 'Distribution', value: 'distribution' },
          { title: 'Deliveries', value: 'deliveries' },
          { title: 'Health and Safety', value: 'health' },
        ],
      },
    },
  ],
}
