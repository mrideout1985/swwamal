import { GetStaticProps } from 'next'

import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getReps, Reps } from '~/lib/sanity.queries'

export const getStaticProps: GetStaticProps<{
  reps: Reps[]
}> = async ({ draftMode = false }) => {
  const client = getClient()
  const reps = await getReps(client)

  return {
    props: {
      draftMode,
      token: readToken,
      reps,
    },
  }
}

const Reps = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Reps</h1>
    </div>
  )
}
export default Reps
