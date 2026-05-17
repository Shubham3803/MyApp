// SectionDropdown.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SectionDropdown = ({ title, data = [], placeholder = "Select" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Dropdown Header */}
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.placeholder}>
          {selected || placeholder}
        </Text>

        <Ionicons
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={18}
          color="#aaa"
        />
      </TouchableOpacity>

      {/* Dropdown List */}
      {isOpen && (
        <View style={styles.dropdownList}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => {
                setSelected(item);
                setIsOpen(false);
              }}
            >
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default SectionDropdown;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#0f1a2b",
    // // padding: 16,
    // borderRadius: 16,
    // marginVertical: 10,
  },
  title: {
    color: "#4da6ff",
    fontSize: 12,
    marginBottom: 8,
    letterSpacing: 1,
  },
  dropdownHeader: {
    backgroundColor: "#1c2738",
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeholder: {
    color: "#ccc",
    fontSize: 14,
  },
  dropdownList: {
    marginTop: 8,
    backgroundColor: "#1c2738",
    borderRadius: 12,
    paddingVertical: 6,
  },
  option: {
    padding: 12,
  },
  optionText: {
    color: "#fff",
    fontSize: 14,
  },
});
