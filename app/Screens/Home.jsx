import { View, Text } from 'react-native'
import React from 'react'
import TopNavBar from "../Navigation/TopNavBar"
import { SafeAreaView } from 'react-native-safe-area-context'
// import { green } from 'react-native-reanimated/lib/typescript/Colors'
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <TopNavBar/>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
    </View>


    </SafeAreaView>
  )
}

export default Home