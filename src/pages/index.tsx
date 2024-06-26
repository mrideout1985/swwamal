import {
  Box,
  Container,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material'
import SanityBlockContent from '@sanity/block-content-to-react'
import type { GetStaticProps } from 'next'

import Card from 'src/components/card/Card'
import HomeLayout from 'src/layouts/home/HomeLayout'
import { readToken } from 'src/lib/sanity.api'
import { getClient } from 'src/lib/sanity.client'
import { getHome, getPosts, Home, Post } from 'src/lib/sanity.queries'

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
    revalidate: 2,
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
            <ListItem key={post._id}>
              <Card post={post} key={post.slug.current} />
            </ListItem>
          ))}
        </List>
        {!props.posts.length && (
          <Box>
            <Typography variant="h6">Slow news day...</Typography>
          </Box>
        )}
      </section>
    </Container>
  )
}

IndexPage.getLayout = (page) => <HomeLayout>{page}</HomeLayout>

export default IndexPage
