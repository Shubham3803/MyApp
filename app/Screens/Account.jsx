import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import { Button } from '@react-navigation/elements'
import { useRouter } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import TopNavBar from "../Navigation/TopNavBar";
import EditProfile from "../components/EditProfile";

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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavBar />

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

          <EditProfile
            title={"Profile"}
            iconName="person-outline"
            onPress={() => router.push("/Pages/MyProfile")}
          />

          <Button
            title="next page"
            onPress={() => router.push("/Screens/Appointment")}
          />
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Account;
