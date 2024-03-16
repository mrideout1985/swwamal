import { Box } from '@mui/material'
import React, { PropsWithChildren } from 'react'

import Footer from '~/components/footer/Footer'
import Navigation from '~/components/navigation/Navigation'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}

export default Layout
