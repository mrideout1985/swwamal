import { Container, List, ListItem, Paper } from '@mui/material'
import SanityBlockContent from '@sanity/block-content-to-react'
import type { GetStaticProps } from 'next'

import Card from '~/components/card/Card'
import HomeLayout from '~/layouts/home/HomeLayout'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getHome, getPosts, Home, Post } from '~/lib/sanity.queries'

import { NextPageWithLayout } from './_app'

export const getStaticProps: GetStaticProps<{
  home: Home[]
  posts: Post[]
}> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const home = await getHome(client)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      home,
      posts,
    },
  }
}

const IndexPage: NextPageWithLayout<{ home: Home[]; posts: Post[] }> = (
  props,
) => {
  return (
    <Container maxWidth="md">
      <section>
        <SanityBlockContent blocks={props.home[0].textBlockOne} />
      </section>
      <section>
        <h3>Latest News</h3>
        <List style={{ padding: 0 }}>
          {props.posts.map((post) => (
            <ListItem>
              <Card post={post} key={post.slug.current} />
            </ListItem>
          ))}
        </List>
      </section>
    </Container>
  )
}

IndexPage.getLayout = (page) => <HomeLayout>{page}</HomeLayout>

export default IndexPage
