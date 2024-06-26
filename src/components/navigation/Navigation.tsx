import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMedia } from 'react-use'

import CWU from '../icons/cwu-logo.svg'

const MobileNav = ({ pages }: { pages: string[] }) => {
  const router = useRouter()

  return (
    <AppBar position="static">
      <Container>
        <Toolbar
          variant="regular"
          disableGutters
          component="nav"
          aria-label="primary navigation"
        >
          <Box
            sx={{
              width: '100%',
              marginX: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Link href={`${page === 'home' ? '/' : `/${page}`}`} key={page}>
                <Button
                  disableRipple
                  sx={{
                    borderRadius: '0',
                    fontFamily: "Montserrat, 'sans-serif'",
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                    color:
                      router.pathname === (page === 'home' ? '/' : `/${page}`)
                        ? '#ff0077'
                        : 'none',
                  }}
                  variant="text"
                  color="secondary"
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const DesktopNav = ({ pages }: { pages: string[] }) => {
  const router = useRouter()

  return (
    <AppBar position="static">
      <Container>
        <Toolbar
          variant="regular"
          disableGutters
          component="nav"
          aria-label="primary navigation"
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingY: '1rem',
          }}
        >
          <CWU width="160px" height="auto" fill="#ff0077" />
          <Box>
            {pages.map((page) => (
              <Link href={`${page === 'home' ? '/' : `/${page}`}`} key={page}>
                <Button
                  disableRipple
                  sx={{
                    padding: '0 1rem',
                    borderRadius: '0',
                    fontFamily: "Montserrat, 'sans-serif'",
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                    color:
                      router.pathname === (page === 'home' ? '/' : `/${page}`)
                        ? '#ff0077'
                        : 'none',
                  }}
                  variant="text"
                  color="secondary"
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const Navigation = () => {
  const isWide = useMedia('(min-width: 600px)', false)
  const pages = ['home', 'about', 'reps', 'agreements']

  return (
    <>{isWide ? <DesktopNav pages={pages} /> : <MobileNav pages={pages} />}</>
  )
}

export default Navigation
