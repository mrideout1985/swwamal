import { Container, Paper } from '@mui/material'
import { PropsWithChildren } from 'react'

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container className="container">{children}</Container>
}

export default HomeLayout
