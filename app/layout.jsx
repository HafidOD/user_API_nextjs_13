// import './globals.css'
import './style.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Listing Users API',
  description: 'First app with Nextjs 13',
  keywords: 'nextjs13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="container p-4">
          {children}
        </div>
        </body>
    </html>
  )
}
