import { Container } from '@mui/material'
import { GetStaticProps } from 'next'
import { getClient } from '~/lib/sanity.client'
import { About, getAbout } from '~/lib/sanity.queries'
import { readToken } from '~/lib/sanity.api'
import SanityBlockContent from '@sanity/block-content-to-react'

export const getStaticProps: GetStaticProps<{
  about: About[]
}> = async ({ draftMode = false }) => {
  const client = getClient()
  const about = await getAbout(client)

  return {
    props: {
      draftMode,
      token: readToken,
      about,
    },
  }
}

const About = (props) => {
  return (
    <Container maxWidth="md">
      <SanityBlockContent blocks={props.about[0].body} />
    </Container>
  )
}

export default About
