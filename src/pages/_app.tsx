import '~/styles/global.scss'

import { ThemeProvider } from '@mui/material/styles'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import type { ReactElement, ReactNode } from 'react'
import { lazy } from 'react'

import Layout from '~/layouts/layout/Layout'
import { theme } from '~/styles/theme'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

const mono = IBM_Plex_Mono({
  variable: '--font-family-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const sans = Inter({
  variable: '--font-family-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

const serif = PT_Serif({
  variable: '--font-family-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={theme}>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </ThemeProvider>
  )
}
