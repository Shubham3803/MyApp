import { StyleSheet, TextInput, Text, View } from "react-native";

const InputField = ({
  placeholder,
  value,
  type = "text",
  style,
  onChangeText,
  title,
}) => {
  function handleChange(text) {
    if (type === "number") {
      const filteredText = text.replace(/[^0-9]/g, "");
      onChangeText && onChangeText(filteredText);
    } else if (type === "alphabetic") {
      const filteredText = text.replace(/[^a-zA-Z]/g, "");
      onChangeText && onChangeText(filteredText);
    } else {
      onChangeText && onChangeText(text);
    }
  }

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor="#7a869a"
        onChangeText={handleChange}
        style={[styles.input, style]}
        keyboardType={type === "number" ? "numeric" : "default"}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  input: {
    backgroundColor: "#1c2738",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    fontSize: 14,
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});
