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
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Parcel Force', value: 'parcel force' },
          { title: 'Other', value: 'other' },
          { title: 'Time Off', value: 'time off' },
          { title: 'Postal', value: 'postal' },
          { title: 'Processing', value: 'processing' },
        ],
      },
    },
  ],
}
