import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { HomeIcon } from 'react-native-heroicons/solid'

export default function HomeScreen() {
  const { user, signOut } = useContext(AuthContext)
  const navigation = useNavigation()

  const handleLogout = async () => {
    const result = await signOut()

    if (result.success) {
      navigation.navigate('Welcome')
    } else {
      Alert.alert('Logout Error', result.error)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.flexRowStart}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
            <HomeIcon size="20" color={themeColors.primaryBtnText} />
          </TouchableOpacity>
        </View>
        {user ? (
          <>
            <View style={styles.mainContent}>
              <Text style={styles.title}>Welcome, {user.displayName}</Text>
            </View>
            <View>
              <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          ''
        )}
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
    alignItems: 'center',
    marginVertical: 16,
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
  title: {
    color: themeColors.primaryText,
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    backgroundColor: themeColors.btnRed,
    marginHorizontal: 14,
    marginBottom: 14,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: themeColors.primaryBtnText,
  },
})
