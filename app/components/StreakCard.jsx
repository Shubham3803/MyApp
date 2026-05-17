import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StreakCard = ({ days = 15, topPercent = 5 }) => {
  return (
    <LinearGradient colors={['#0f172a', '#1e293b']} style={styles.card}>
      <View style={styles.leftContent}>
        <Text style={styles.label}>Current Streak</Text>

        <View style={styles.row}>
          <Text style={styles.days}>{days}</Text>
          <Text style={styles.daysLabel}> DAYS</Text>
        </View>

        <View style={styles.badge}>
          <MaterialCommunityIcons name="fire" size={14} color="#f97316" />
          <Text style={styles.badgeText}>Top {topPercent}% this month</Text>
        </View>
      </View>

<View style={styles.rightContent}>

      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons name="fire" size={50} color="#60a5fa" />
      </View>
</View>
    </LinearGradient>
  );
};

export default StreakCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    padding: 20,
    paddingHorizontal: 24,
  },
  leftContent: {
    flex: 1,
  },
  label: {
    color: '#94a3b8',
    fontSize: 14,
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  days: {
    color: '#fff',
    fontSize: 46,
    fontWeight: 'bold',
  },
  daysLabel: {
    color: '#60a5fa',
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '600',
  },
 badge: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#1e293b',
  paddingVertical: 10,
  paddingHorizontal: 8,
  borderRadius: 999,
  marginTop: 10,
  alignSelf: 'flex-start'
},
  badgeText: {
    color: '#cbd5f5',
    fontSize: 12,
    marginLeft: 6,
  },
  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1e3a8a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContent: {
    marginLeft: 20,
  },
});