import { Container } from '@mui/material'
import SanityBlockContent from '@sanity/block-content-to-react'
import { GetStaticProps } from 'next'
import Image from 'next/image'

import { readToken } from 'src/lib/sanity.api'
import { getClient } from 'src/lib/sanity.client'
import { urlForImage } from 'src/lib/sanity.image'
import { About, getAbout } from 'src/lib/sanity.queries'

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
    revalidate: 2,
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
