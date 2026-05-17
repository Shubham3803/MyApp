import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

const TopNavBar = ({
  showBackButton,
  navText,
  Profile,
  rightIcon,
  rightIconAction,
  name = "User",
  showDate,
}) => {
  // Get current date
  const today = new Date();

  // Label logic
  const getDayLabel = () => {
    const now = new Date();
    const todayDate = new Date(now.setHours(0, 0, 0, 0));

    const compareDate = new Date(today.setHours(0, 0, 0, 0));

    const diff = (compareDate - todayDate) / (1000 * 60 * 60 * 24);

    if (diff === 0) return "TODAY";
    if (diff === -1) return "YESTERDAY";
    if (diff === 1) return "TOMORROW";

    return today.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
  };

  const dayLabel = getDayLabel();

  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <View
      style={{
        height: 60,
        backgroundColor: "#2196F3",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        borderRadius: 50,
        marginTop: 5,
        marginHorizontal: 10,
      }}
    >
      {/* LEFT SECTION */}
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        {showBackButton && (
          <TouchableOpacity onPress={handleBackPress}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        )}

        {/* PROFILE SECTION */}
        {Profile && (
          <TouchableOpacity style={{ marginLeft: 0 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/android-icon-foreground.png")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#ffffff",
                }}
              />

              <View style={{ marginLeft: 8 }}>
                <Text style={{ color: "white", fontSize: 12 }}>
                  Welcome Back
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>

      {/* CENTER SECTION */}
      <View style={{ flex: 1, alignItems: "center" }}>
        {navText && (
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            {navText}
          </Text>
        )}

        {showDate && (
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 10, letterSpacing: 1 }}>
              {dayLabel}
            </Text>

            <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
              {formattedDate}
            </Text>
          </View>
        )}
      </View>

      {/* RIGHT SECTION */}
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        {rightIcon && (
          <TouchableOpacity onPress={rightIconAction}>
            <Ionicons name={rightIcon} size={22} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TopNavBar;
