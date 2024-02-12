import { GetStaticProps } from "next"
import { readToken } from "~/lib/sanity.api"
import { getClient } from "~/lib/sanity.client"
import { Post, getPosts } from "~/lib/sanity.queries"
import { SharedPageProps } from "./_app"

const News = () => {
    return (
        <div>
        <h1>News</h1>
        </div>
    )
}

export default News

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}