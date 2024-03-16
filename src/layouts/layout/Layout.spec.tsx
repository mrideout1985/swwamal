import { render } from '@testing-library/react'

import Layout from './Layout'

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: {},
    asPath: '',
  }),
}))

jest.mock('react-use', () => ({
  ...jest.requireActual('react-use'),
  useMedia: jest.fn(),
}))

describe('Layout', () => {
  it('should render children', () => {
    const screen = render(
      <Layout>
        <div>children</div>
      </Layout>,
    )
    expect(screen.getByText('children')).toBeInTheDocument()
  })
})
