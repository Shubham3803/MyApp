import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';



export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Register the bottom tab navigator route (file: app/Navigation/BottonNavbar.jsx) */}
        <Stack.Screen
          name="Navigation/BottomNavbar"
          options={{ headerShown: false }}
        />
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