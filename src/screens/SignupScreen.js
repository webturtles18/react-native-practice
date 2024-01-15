import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../contexts/AuthContext'

export default function LoginScreen() {
  const { signUp } = useContext(AuthContext)
  const navigation = useNavigation()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    const result = await signUp(email, password, fullName)

    if (result.success) {
      navigation.navigate('Login')
      console.log('Signup successful')
    } else {
      console.error('Signup failed:', result.error)
      Alert.alert('Signup Error', result.error)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.imageContainer}>
        <View style={styles.flexRowStart}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size="20" color={themeColors.primaryBtnText} />
          </TouchableOpacity>
        </View>
        <View style={styles.flexRowCenter}>
          <Image
            source={require('../assets/images/signup.png')}
            style={styles.imageContainer.image}
          />
        </View>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <View style={styles.form.control}>
            <Text style={styles.form.label}>Full Name</Text>
            <TextInput
              style={styles.form.input}
              value={fullName}
              placeholder="Enter Full Name"
              onChangeText={setFullName}
            />
          </View>
          <View style={styles.form.control}>
            <Text style={styles.form.label}>Email Address</Text>
            <TextInput
              style={styles.form.input}
              value={email}
              placeholder="Enter Email"
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.form.control}>
            <Text style={styles.form.label}>Password</Text>
            <TextInput
              secureTextEntry
              style={[styles.form.input, { marginBottom: 10 }]}
              value={password}
              placeholder="Enter Password"
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.formContainer.orText}>OR</Text>
        <View style={[styles.flexRowSpaceAround]}>
          <TouchableOpacity style={styles.socialContainer.button}>
            <Image
              source={require('../assets/icons/google.png')}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialContainer.button}>
            <Image
              source={require('../assets/icons/apple.png')}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialContainer.button}>
            <Image
              source={require('../assets/icons/facebook.png')}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.flexRowCenter, { marginTop: 14 }]}>
          <Text style={[styles.loginText, { marginRight: 10 }]}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.loginText, { color: themeColors.linkText }]}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  imageContainer: {
    minHeight: 200,
    image: {
      width: 250,
      height: 171,
    },
  },
  formContainer: {
    flex: 1,
    backgroundColor: themeColors.bgWhite,
    padding: 24,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    orText: {
      textAlign: 'center',
      fontWeight: '500',
      color: themeColors.textGray700,
      fontSize: 20,
      paddingVertical: 16,
    },
  },
  flexRowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flexRowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flexRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backButton: {
    padding: 10,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    backgroundColor: themeColors.primaryBtn, // Example background color
    marginTop: 5, // Adjust margin as needed
  },
  form: {
    marginTop: 24,
    control: {
      marginBottom: 16,
    },
    label: {
      color: themeColors.textGray700,
      marginHorizontal: 8,
      fontWeight: 500,
      marginBottom: 4,
    },
    input: {
      backgroundColor: themeColors.inputBg,
      borderRadius: 8,
      padding: 8,
      color: themeColors.textGray700,
    },
    linkText: {
      marginBottom: 5,
    },
  },
  socialContainer: {
    button: {
      backgroundColor: themeColors.bgGray100,
      padding: 4,
      borderRadius: 16,
    },
  },

  button: {
    paddingVertical: 12,
    backgroundColor: themeColors.primaryBtn,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: themeColors.primaryBtnText,
  },
  loginText: {
    fontWeight: '500',
    color: themeColors.primaryText,
  },
})
