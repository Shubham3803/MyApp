import React from "react";
import { Button, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import { Button } from '@react-navigation/elements'

import { useRouter } from "expo-router";
import TopNavBar from "../Navigation/TopNavBar";
import EditProfile from "../components/EditProfile";
import { auth } from "../config/fireBase";
const Account = () => {
  const ProfileOption = [
    {
      id: 1,
      title: "Profile",
      iconName: "person-outline",
      router: "/Pages/MyProfile",
    },
    {
      id: 2,
      title: "Settings",
      iconName: "settings-outline",
      router: "/Pages/Settings",
    },
  ];

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth().signOut();
      router.replace("/Screens/login");
    } catch (err) {
      // Keep it simple: show the firebase error message in an alert.
      // eslint-disable-next-line no-alert
      alert(err?.message || "Logout failed");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavBar 
      rightIcon="log-out-outline" 
       showBackButton={true}
        navText={"Skill Analytics"}
      rightIconAction={handleLogout} />

      {/* <ScrollView style={{}}> */}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Account</Text>

          <FlatList
            data={ProfileOption}
            renderItem={({ item }) => (
              <EditProfile
                title={item.title}
                iconName={item.iconName}
                onPress={() => router.push(item.router)}
              />
            )}
          />
{/* 
          <EditProfile
            title={"Profile"}
            iconName="person-outline"
            onPress={() => router.push("/Pages/MyProfile")}
          /> */}

          {/* <Button
            title="next page"
            onPress={() => router.push("/Screens/Appointment")}
          /> */}
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Account;
