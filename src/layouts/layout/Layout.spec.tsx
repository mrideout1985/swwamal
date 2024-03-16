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
