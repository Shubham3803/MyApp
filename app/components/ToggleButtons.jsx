// // ToggleButtons.js
// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// const options = ["Barbell", "Dumbbell", "Machine"];

// const ToggleButtons = () => {
//   const [selected, setSelected] = useState("Barbell");

//   return (
//     <View style={styles.container}>
//       {options.map((item) => (
//         <TouchableOpacity
//           key={item}
//           style={[
//             styles.button,
//             selected === item && styles.activeButton,
//           ]}
//           onPress={() => setSelected(item)}
//         >
//           <Text
//             style={[
//               styles.text,
//               selected === item && styles.activeText,
//             ]}
//           >
//             {item}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// export default ToggleButtons;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 10,
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 28,
//     borderRadius: 10,
//     backgroundColor: "#1c2738",
//   },
//   activeButton: {
//     backgroundColor: "#2f6fed",
//   },
//   text: {
//     color: "#ccc",
//     fontSize: 13,
//   },
//   activeText: {
//     color: "#fff",
//     fontWeight: "600",
//   },
// });

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Barbell", "Dumbbell", "Machine"];

const ToggleButtons = ({ title, value, onChange }) => {
  return (
    <View style={styles.wrapper}>
      
      {/* Title */}
      {title && <Text style={styles.title}>{title}</Text>}

      {/* Buttons */}
      <View style={styles.container}>
        {options.map((item) => {
          const isActive = value === item;

          return (
            <TouchableOpacity
              key={item}
              style={[styles.button, isActive && styles.activeButton]}
              onPress={() => onChange && onChange(item)}
            >
              <Text
                style={[styles.text, isActive && styles.activeText]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

    </View>
  );
};

export default ToggleButtons;

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },

  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },

  container: {
    flexDirection: "row",
    gap: 10,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 10,
    backgroundColor: "#1c2738",
  },

  activeButton: {
    backgroundColor: "#2f6fed",
  },

  text: {
    color: "#ccc",
    fontSize: 13,
  },

  activeText: {
    color: "#fff",
    fontWeight: "600",
  },
});
