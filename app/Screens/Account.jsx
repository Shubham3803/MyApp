import { View, Text, Button } from 'react-native'
import React from 'react'
// import { Button } from '@react-navigation/elements'
import { useRouter  } from 'expo-router'

const Account = () => {
  const router = useRouter();
  return (
   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  <Text style={{ textAlign: "center" }}>Account</Text>


  <Button
  title = "next page"
  onPress={() => router.push('/Screens/Appointment')}
  />
</View>
  )
}

export default Account
