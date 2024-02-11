export default {
  name: 'agreements',
  title: 'Agreements',
  type: 'document',
  fields: [
    {
      name: 'policyname',
      title: 'Policy Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'policyname',
        maxLength: 96,
      },
    },
    {
      name: 'policytype',
      title: 'Policy Type',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
  ],
}
