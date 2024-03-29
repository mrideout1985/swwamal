import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>
}

export default HomeLayout
