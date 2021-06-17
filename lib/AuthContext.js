import { createContext, useContext, useEffect, useState } from 'react'
import firebase, { auth } from 'lib/firebase'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return auth.signInWithRedirect(provider)
  }

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }, [])

  const value = {
    currentUser,
    login
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
