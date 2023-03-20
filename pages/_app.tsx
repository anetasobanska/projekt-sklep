import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <p className='text-3xl text-red-400'>hello from _app.tsx</p>
    <Component {...pageProps} />
  </div>
}
