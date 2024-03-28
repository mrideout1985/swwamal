import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { GetStaticProps } from 'next'
import { readToken } from 'src/lib/sanity.api'
import { getClient } from 'src/lib/sanity.client'
import { Reps, getReps } from 'src/lib/sanity.queries'

export const getStaticProps: GetStaticProps<{
  reps: Reps[]
}> = async () => {
  const client = getClient()
  const reps = await getReps(client)

  return {
    props: {
      token: readToken,
      reps,
    },
    revalidate: 5,
  }
}

const RepTable = ({ reps, title }: { reps: Reps[]; title: string }) => (
  <>
    <h2>{title}</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {reps.map((rep: Reps) => (
          <TableRow key={rep._id}>
            <TableCell>{rep.name}</TableCell>
            <TableCell>{rep.email}</TableCell>
            <TableCell>{rep.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
)

const RepsPage = (props) => {
  const filterRepsByBranch: Reps[] = props.reps.filter((rep: Reps) =>
    rep.categories?.includes('branch'),
  )

  const filterRepsByDeliveries: Reps[] = props.reps.filter((rep: Reps) =>
    rep.categories?.includes('deliveries'),
  )

  const filterRepsByDistribution: Reps[] = props.reps.filter((rep: Reps) =>
    rep.categories?.includes('distribution'),
  )

  const filterRepsByProcessing: Reps[] = props.reps.filter((rep: Reps) =>
    rep.categories?.includes('processing'),
  )

  const filterRepsByHealth: Reps[] = props.reps.filter((rep: Reps) =>
    rep.categories?.includes('health'),
  )

  return (
    <Container maxWidth="md">
      <RepTable title="Branch" reps={filterRepsByBranch} />
      <RepTable title="Deliveries" reps={filterRepsByDeliveries} />
      <RepTable title="Distribution" reps={filterRepsByDistribution} />
      <RepTable title="Processing" reps={filterRepsByProcessing} />
      <RepTable title="Health And Safety" reps={filterRepsByHealth} />
    </Container>
  )
}

export default RepsPage
