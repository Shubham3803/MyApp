import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import TopNavBar from "../Navigation/TopNavBar"

const Appointment = () => {
  return (
 <SafeAreaView style={{ flex: 1 }}>

      <TopNavBar/>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Appointment</Text>
    </View>


    </SafeAreaView>
  )
}

export default Appointment