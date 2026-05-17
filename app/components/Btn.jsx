import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
const Btn = ({ title, onPress, style, iconName = "add" }) => {
  return (
    <TouchableOpacity 
          onPress={onPress} 
          style={[styles.container, style]}>

      <View style={styles.box}>
        <Icon name={iconName} size={20} color="#fff" />
        <Text
            style={styles.text}
        >
          {title}
        </Text>
      </View>
      
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2f6fed",
    padding: 16,
    borderRadius: 50,
    alignItems: "center",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text:{
    fontFamily: "Inter_600SemiBold",
    width: 100,
    fontWeight: "800",
    color: "#fff",
    fontSize: 15,
  }
});
