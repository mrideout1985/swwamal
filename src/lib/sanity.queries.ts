import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export const homeQuery = groq`*[_type == "home"]{
  _id,
  header,
  slug,
  image,
  textBlockOne[]{
    ...,
    children[]{
      ...
    }
  },
}
`

export const repsQuery = groq`*[_type == "reps"]{
  _id,
  name,
  slug,
  mainImage,
  bio,
  email,
  categories
}
`

export const aboutQuery = groq`
  *[_type == "about"]{
    title,
    "imageUrl": image.asset->url,
    slug,
    body
  }
`

export const getReps = async (client: SanityClient): Promise<Reps[]> =>
  await client.fetch(repsQuery)

export async function getHome(client: SanityClient): Promise<Home[]> {
  return await client.fetch(homeQuery)
}

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const getAbout = async (client: SanityClient): Promise<About[]> => {
  return await client.fetch(aboutQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export interface Reps {
  name: string
  slug: {
    _type: 'slug'
    current: string
  }
  mainImage: ImageAsset
  role: string
  email: string
  categories: string[]
}

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface Home {
  header: string
  image: ImageAsset
  textBlockOne: PortableTextBlock[]
  slug: Slug
  _id: string
}

export interface About {
  title: string
  image: ImageAsset
  slug: Slug
  body: PortableTextBlock[]
}
