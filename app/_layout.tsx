import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';



export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Step 1: Splash loads first - app/index.jsx = route "index" */}
        <Stack.Screen name="index" />
        <Stack.Screen name="Navigation/BottomNavbar" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

// import { View, Text } from 'react-native'
// import React from 'react'
// import BottomNavbar from './Navigation/BottonNavbar'

// const _layout = () => {
//   return (
//    <BottomNavbar/>
//   )
// }

// export default _layout