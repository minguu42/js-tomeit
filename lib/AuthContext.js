import { createContext, useContext, useEffect, useState } from 'react'
import firebase, { auth } from 'lib/firebase'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return auth.signInWithRedirect(provider)
  }

  const logout = () => {
    return auth.signOut()
  }

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
  }, [])

  const value = {
    currentUser,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
