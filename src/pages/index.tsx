import SanityBlockContent from '@sanity/block-content-to-react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Container from '~/components/Container'
import HomeLayout from '~/layouts/home/HomeLayout'
import Layout from '~/layouts/layout/Layout'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { Home, getHome } from '~/lib/sanity.queries'
import { NextPageWithLayout } from './_app'

export const getStaticProps: GetStaticProps<
  {
    posts: Home[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getHome(client)
  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}

const IndexPage: NextPageWithLayout<{ posts: Home[] }> = (props) => {
  return (
    <Container>
      <section>
        <SanityBlockContent blocks={props.posts[0].textBlockOne} />
        <SanityBlockContent blocks={props.posts[0].textBlockTwo} />
      </section>
    </Container>
  );
};

IndexPage.getLayout = (page) => (
    <HomeLayout>{page}</HomeLayout>
);

export default IndexPage;
