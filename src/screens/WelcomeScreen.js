import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>Let's Get Started!</Text>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/images/welcome.png')} style={styles.image} />
          </View>
          <View className="space-y-4">
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
              <Text style={[styles.loginText, { marginRight: 10 }]}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.loginText, { color: themeColors.linkText }]}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 2,
    backgroundColor: themeColors.bg,
  },
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  title: {
    color: themeColors.primaryText,
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 350,
  },
  buttonContainer: {
    marginVertical: 16,
  },
  button: {
    paddingVertical: 12,
    backgroundColor: themeColors.primaryBtn,
    marginHorizontal: 14,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: themeColors.primaryBtnText,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  loginText: {
    fontWeight: '600',
    color: themeColors.primaryText,
  },
})
