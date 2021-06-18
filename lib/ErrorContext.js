import { createContext, useContext, useState } from 'react'

const ErrorContext = createContext()

export const useError = () => {
  return useContext(ErrorContext)
}

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState('')

  const value = {
    error,
    setError
  }

  return (
    <ErrorContext.Provider value={value}>
      {children}
    </ErrorContext.Provider>
  )
}

export default ErrorProvider
