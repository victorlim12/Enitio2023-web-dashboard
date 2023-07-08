import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'ENITIO 2023',
  description: 'Honestly now is Loren Ipsum',
}

export default function RootLayout({
  Component, pageProps
}: {
  Component: any
  pageProps: any
}) {
  return (
    <div lang="en">
      <Component {...pageProps}/>
    </div>
  )
}
