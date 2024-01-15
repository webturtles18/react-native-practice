import React from 'react'
import AppNavigator from './src/navigator/Navigation'
import { AuthProvider } from './src/contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  )
}

export default App
