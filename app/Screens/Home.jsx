import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopNavBar from "../Navigation/TopNavBar";
import StreakCard from "../components/StreakCard";
import BookingCards from "../components/BookingCards";

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
const Home = () => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaView style={{ flex: 1, padding:10, paddingBottom: tabBarHeight}}>
      <TopNavBar Profile={true} rightIcon={"settings-outline"} />

      <ScrollView style={{ flex: 1,paddingHorizontal:10,
        paddingVertical: 10,
      }}>
        <StreakCard days={15} topPercent={5} />
        <StreakCard days={15} topPercent={5} />
        <StreakCard days={15} topPercent={5} />
        <StreakCard days={15} topPercent={5} />
        <StreakCard days={15} topPercent={5} />
        <BookingCards />
        <View style={styles.Container}>
          <View style={styles.view}>
          <Text>Home</Text>
            <Text>Home</Text>
            <Text>Home</Text>
          </View>
        <View></View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
  },
  Container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
});
