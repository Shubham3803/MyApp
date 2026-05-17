import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopNavBar from "../Navigation/TopNavBar";
import ExerciseCard from "../components/ExerciseCard";

import Btn from "../components/Btn";
import InputField from "../components/InputField";
import SectionDropdown from "../components/SectionDropdown";
import ToggleButtons from "../components/ToggleButtons";

const Workouts = () => {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseType, setExerciseType] = useState("");

  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <TopNavBar
        showBackButton={true}
        showDate={true}
        rightIcon={"settings-outline"}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={true}
      >
        {/* Top Section */}
        <View style={styles.container}>
          <SectionDropdown
            title="MUSCLE GROUP"
            placeholder="Select Muscle Group"
            data={["Chest", "Back", "Legs", "Shoulders", "Arms", "Abs"]}
          />

          <View style={styles.inputGroup}>
            {/* <Text style={styles.title}>Exercise Name</Text> */}
            <InputField
              title="Exercise Name"
              placeholder="Enter Exercise Name"
              type="alphabet"
              value={exerciseName}
              onChangeText={setExerciseName}
              style={styles.fullWidth}
            />
          </View>

          <ToggleButtons
            title="Exercise Type"
            value={exerciseType}
            onChange={setExerciseType}
          />
        </View>

        {/* Bottom Section */}
        <View style={styles.container2}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>SETS</Text>
            <InputField
              placeholder="0"
              type="number"
              value={sets}
              onChangeText={setSets}
              style={styles.smallInput}
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>REPS</Text>
            <InputField
              placeholder="0"
              type="number"
              value={reps}
              onChangeText={setReps}
              style={styles.smallInput}
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>WEIGHT (KG)</Text>
            <InputField
              placeholder="0"
              type="number"
              value={weight}
              onChangeText={setWeight}
              style={styles.smallInput}
            />
          </View>
        </View>

        {/* Button */}
        <Btn title="Save Exercise" iconName="save-outline" />

        {/* Previous Sets */}
        <View>
          <Text style={styles.title}>Previous Sets</Text>
        </View>

        {/*exerciseCard */}
        <ExerciseCard iconsName="close-outline" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#020817",
  },

  scrollView: {
    flex: 1,
  },

  contentContainer: {
    padding: 16,
    gap: 16, // 👈 Equal spacing everywhere
  },

  container: {
    backgroundColor: "#0f1a2b",
    padding: 16,
    borderRadius: 16,
    gap: 20,
  },

  container2: {
    backgroundColor: "#0f1a2b",
    padding: 16,
    borderRadius: 16,
    flexDirection: "row",
    gap: 10,
  },

  inputGroup: {
    gap: 10,
  },

  fullWidth: {
    width: "100%",
  },

  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },

  inputBox: {
    flex: 1,
    gap: 6,
  },

  label: {
    color: "#6c7a96",
    fontSize: 13,
    fontWeight: "600",
  },

  smallInput: {
    height: 50,
    borderRadius: 14,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#1c2738",
    borderWidth: 1,
    borderColor: "#2a3a55",
  },
});
