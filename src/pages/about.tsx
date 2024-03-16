import { Container } from '@mui/material'
import { GetStaticProps } from 'next'
import { getClient } from '~/lib/sanity.client'
import { About, getAbout } from '~/lib/sanity.queries'
import { readToken } from '~/lib/sanity.api'
import SanityBlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

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
  console.log(props)

  return (
    <Container maxWidth="md">
      <SanityBlockContent blocks={props.about[0].body} />
      <Image
        src={urlForImage(props.about[0].image).url()}
        alt="Rep Structure"
        width={960}
        height={720}
        layout="intrinsic"
      />
    </Container>
  )
}

export default About
