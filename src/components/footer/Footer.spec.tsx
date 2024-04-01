import { render } from '@testing-library/react'
import Footer from './Footer'

describe('footer', () => {
  it('should render the footer', () => {
    const screen = render(<Footer />)
    expect(screen.getByText('South West Wales Amalgamated')).toBeInTheDocument()
  })
})
