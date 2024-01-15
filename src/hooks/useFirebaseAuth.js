import { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'

export function useFirebaseAuth() {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState(null)

  // Function to handle user state changes
  const handleAuthChanged = userState => {
    setUser(userState)
    if (initializing) {
      setInitializing(false)
    }
  }

  // Function to handle user sign-in
  const signIn = async () => {
    try {
      // Implement your sign-in logic here using Firebase authentication methods
      // Example: await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Sign-in error:', error)
    }
  }

  // Function to handle user sign-out
  const signOut = async () => {
    try {
      // Implement your sign-out logic here using Firebase authentication methods
      // Example: await auth().signOut();
    } catch (error) {
      console.error('Sign-out error:', error)
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuthChanged)
    return () => subscriber() // Unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { initializing, user, signIn, signOut }
}
