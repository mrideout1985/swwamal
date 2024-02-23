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
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  bio,
  email
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
  mainImage: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  bio: string
  email: string
  category: 'branch' | 'processing' | 'distribution' | 'deliveries'
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
