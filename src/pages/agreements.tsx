import {
  Container,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { GetStaticProps } from 'next'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { Agreement, Reps, getAbout, getAgreements } from '~/lib/sanity.queries'
import reps from './reps'

export const getStaticProps: GetStaticProps<{
  agreements: Agreement[]
}> = async () => {
  const client = getClient()
  const agreements = await getAgreements(client)

  return {
    props: {
      token: readToken,
      agreements,
    },
  }
}

const AgreementTable = ({
  agreements,
  title,
}: {
  agreements: Agreement[]
  title: string
}) => (
  <>
    <h2>{title}</h2>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Policy</TableCell>
          <TableCell>Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {agreements.map((agreement: Agreement) => {
          return (
            agreement.url && (
              <TableRow key={agreement._id}>
                <TableCell>
                  <Link
                    href={agreement.url}
                    sx={{ textDecoration: 'underline black' }}
                  >
                    <Typography variant="button" color="secondary">
                      {agreement.policyname}
                    </Typography>
                  </Link>
                </TableCell>
                <TableCell sx={{ textTransform: 'capitalize' }}>
                  {agreement.policytype}
                </TableCell>
              </TableRow>
            )
          )
        })}
      </TableBody>
    </Table>
  </>
)

const Agreements = (props: { agreements: Agreement[] }) => {
  const filterByPostal = props.agreements.filter((agreement) =>
    agreement.categories.includes('postal'),
  )
  const filterByParcelForce = props.agreements.filter((agreement) =>
    agreement.categories.includes('parcel force'),
  )
  const filterByTimeOff = props.agreements.filter((agreement) =>
    agreement.categories.includes('time off'),
  )
  const filterByProcessing = props.agreements.filter((agreement) =>
    agreement.categories.includes('processing'),
  )
  const filterByOther = props.agreements.filter((agreement) =>
    agreement.categories.includes('other'),
  )

  return (
    <Container maxWidth="md">
      <AgreementTable agreements={filterByPostal} title="Postal" />
      <AgreementTable agreements={filterByParcelForce} title="Parcel Force" />
      <AgreementTable agreements={filterByTimeOff} title="Time Off" />
      <AgreementTable agreements={filterByProcessing} title="Processing" />
      <AgreementTable agreements={filterByOther} title="Other" />
    </Container>
  )
}

export default Agreements
