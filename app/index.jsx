import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';




const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('Screens/signUp');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyApp</Text>
      <Text style={styles.subtitle}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F4FE',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  subtitle: {
    fontSize: 18,
    color: '#64748B',
    marginTop: 8,
  },
});

export default SplashScreen;