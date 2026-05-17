import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity } from "react-native";

import Workouts from "../Screens/Workouts";
import Account from "../Screens/Account";
import Home from "../Screens/Home";
import Stats from "../Screens/Stats";

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Workouts":
              iconName = "barbell-outline";
              break;
            case "Stats":
              iconName = "stats-chart-outline";
              break;
            case "Account":
              iconName = "person-outline";
              break;
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },

        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#cbd5e1",

        tabBarStyle: {
          backgroundColor: "#2563EB",
          height: 65,
          borderRadius: 20,
          position: "absolute",
          marginHorizontal: 12,
          marginBottom: 20,
          paddingTop: 12,
          paddingBottom: 12,
          elevation: 8,
        },

        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            style={[
              {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 8,
                borderRadius: 12,
              },
              props.accessibilityState?.selected && {
                backgroundColor: "#2563EB",
                marginHorizontal: 6,
              },
            ]}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Workouts" component={Workouts} />
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomNavBar;
