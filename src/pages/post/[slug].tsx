import { Box, Container } from '@mui/material'
import { PortableText } from '@portabletext/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import { readToken } from 'src/lib/sanity.api'
import { getClient } from 'src/lib/sanity.client'
import { urlForImage } from 'src/lib/sanity.image'
import {
  getPost,
  type Post,
  postBySlugQuery,
  postSlugsQuery,
} from 'src/lib/sanity.queries'
import type { SharedPageProps } from 'src/pages/_app'
import { formatDate } from 'src/utils'

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    post: Post
  },
  Query
> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const post = await getPost(client, params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      post,
    },
  }
}

export default function ProjectSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [post] = useLiveQuery(props.post, postBySlugQuery, {
    slug: props.post.slug.current,
  })

  return (
    <Container maxWidth="md">
      <Box component="section" mt={1}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          {post.mainImage && (
            <Image
              className="post__cover"
              src={urlForImage(post.mainImage).url()}
              width={768}
              height={1024}
              style={{ width: '100%', height: 'auto' }}
              alt={post.mainImage.title}
            />
          )}
        </Box>
        <Box>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <p>{formatDate(post._createdAt)}</p>
          <Box>
            <PortableText value={post.body} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export const getStaticPaths = async () => {
  const client = getClient()
  const slugs = await client.fetch(postSlugsQuery)

  return {
    paths: slugs?.map(({ slug }) => `/post/${slug}`) || [],
    fallback: 'blocking',
  }
}
