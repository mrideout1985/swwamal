import { render } from '@testing-library/react'
import { useMedia } from 'react-use'

import Navigation from './Navigation'

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
  }),
}))

jest.mock('react-use', () => ({
  ...jest.requireActual('react-use'),
  useMedia: jest.fn(),
}))

describe('Navigation', () => {
  it('should render mobile navigation when screen is less than 600px', () => {
    ;(useMedia as jest.Mock).mockImplementation(() => false)

    const screen = render(<Navigation />)

    expect(screen.getByText('MobileNav')).toBeInTheDocument()
  })

  it('should render desktop navigation when screen is more than 600px', () => {
    ;(useMedia as jest.Mock).mockImplementation(() => true)

    const screen = render(<Navigation />)

    expect(screen.getByLabelText('primary navigation')).toBeInTheDocument()
  })

  it('should render navigation links', () => {
    ;(useMedia as jest.Mock).mockImplementation(() => true)

    const screen = render(<Navigation />)

    expect(screen.getByRole('link', { name: 'home' })).toHaveAttribute(
      'href',
      '/',
    )
    expect(screen.getByRole('link', { name: 'about' })).toHaveAttribute(
      'href',
      '/about',
    )
    expect(screen.getByRole('link', { name: 'reps' })).toHaveAttribute(
      'href',
      '/reps',
    )
    expect(screen.getByRole('link', { name: 'agreements' })).toHaveAttribute(
      'href',
      '/agreements',
    )
  })
})
