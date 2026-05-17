import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopNavBar from "../Navigation/TopNavBar";

const Stats = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavBar
        showBackButton={true}
        navText={"Skill Analytics"}
        rightIcon={"clandestine-outline"}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>sets</Text>
      </View>
    </SafeAreaView>
  );
};

export default Stats;
