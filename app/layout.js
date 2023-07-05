import Footer from './Footer'
import Navbar from './Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo Nextjs',
  description: 'Start Learning Nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      <Footer/></body>
    </html>
  )
}
