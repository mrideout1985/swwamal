import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div>{children}</div>
      <footer className="footer">
     
      </footer>
    </div>
  )
}
