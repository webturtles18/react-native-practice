import React, { createContext, useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth' // Import Firebase authentication

// Create the AuthContext
export const AuthContext = createContext()

// Create the AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null) // Initialize user state
  const [initializing, setInitializing] = useState(true)

  const handleAuthChanged = userState => {
    setUser(userState)
    if (initializing) {
      setInitializing(false)
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuthChanged)
    return () => subscriber()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const signUp = async (email, password, fullName) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password)

      await userCredential.user.updateProfile({
        displayName: fullName,
      })

      setUser(userCredential.user)
      return { success: true, user: userCredential.user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const signIn = async (email, password) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password)
      setUser(userCredential.user)
      return { success: true, user: userCredential.user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const signOut = async () => {
    try {
      await auth().signOut()
      setUser(null)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const authContext = {
    user,
    initializing,
    signUp,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
}
