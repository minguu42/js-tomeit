import 'styles/globals.css'
import AuthProvider from 'lib/AuthContext'
import ErrorProvider from '../lib/ErrorContext'

function MyApp ({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ErrorProvider>
        <Component {...pageProps} />
      </ErrorProvider>
    </AuthProvider>
  )
}

export default MyApp
