import { Box, Card as PostCard } from '@mui/material'
import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'
import { type Post } from '~/lib/sanity.queries'
import { formatDate } from '~/utils'

import styles from './Card.module.scss'

export default function Card({ post }: { post: Post }) {
  const backgroundImageUrl = post.mainImage
    ? urlForImage(post.mainImage).url()
    : ''

  return (
    <PostCard
      elevation={5}
      className={styles.card}
      sx={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box className={styles.card__container}>
        <h3 className={styles.title}>
          <a className={styles.link} href={`/post/${post.slug.current}`}>
            {post.title}
          </a>
        </h3>
      </Box>
    </PostCard>
  )
}
