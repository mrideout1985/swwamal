/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'header',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'textBlockOne',
      title: 'Text Block One',
      type: 'blockContent',
    },
  ],
}
