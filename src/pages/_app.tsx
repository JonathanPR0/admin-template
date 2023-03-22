import { AppProvide } from '@/data/context/AppContext'
import { AuthProvider } from '@/data/context/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvide>
        <Component {...pageProps} />
      </AppProvide>
    </AuthProvider>
  )
}
