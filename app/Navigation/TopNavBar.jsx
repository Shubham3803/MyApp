import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "#2196F3",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
      }}
    >
      {/* Left Side */}
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        MyApp
      </Text>

      {/* Right Side */}
      <View style={{ flexDirection: "row"  }}>
        {/* <TouchableOpacity style={{ marginLeft: 15 }}>
        </TouchableOpacity> */}

        <TouchableOpacity style={{ marginLeft: 15 }}>
          <View style={{flexDirection:"row"}}> 

            <View style={{flexDirection:"column", justifyContent:"center", direction: "rtl"}}>
        <Text style={{ color: "white", fontSize: 16 }}>Hi, Welcome Back</Text>
            <Text style={{ color: "white", fontSize: 16 }}>Profile</Text>
            </View>
         <Image
            source={require("../../assets/images/android-icon-foreground.png")}
            style={{ width: 50, height: 50,  alignItems:"center",justifyContent:"center"}}
            />
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
