import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { auth } from "./config/fireBase";

const SplashScreen = () => {
  const router = useRouter();
  const didRedirect = useRef(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (didRedirect.current) return;
      didRedirect.current = true;

      if (user) {
        router.replace("/Navigation/BottomNavbar");
      } else {
        router.replace("/Screens/signUp");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2563EB" />
      <Text style={styles.title}>MyApp</Text>
      <Text style={styles.subtitle}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6F4FE",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2563EB",
  },
  subtitle: {
    fontSize: 18,
    color: "#64748B",
    marginTop: 8,
  },
});

export default SplashScreen;
