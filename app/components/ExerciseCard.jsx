import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
const ExerciseCard = ({iconsName = "check", value, onchangeText, onclick}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onclick}>
      <View style={styles.card}>
      
      <View style={styles.leftContent}>
        <Text style={styles.title}>Flat Bench Press</Text>
        <Text style={styles.subtitle}>3 sets • 8 reps • 80kg</Text>
      </View>

      <View style={styles.iconContainer}>
        <Icon name={iconsName} size={20} color="#4A90E2" />
      </View>

    </View>
    </TouchableOpacity>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    padding: 16,
    borderRadius: 12,
  },
  leftContent: {
    flexDirection: 'column',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 4,
  },
  iconContainer: {
    marginLeft: 10,
  },
});
