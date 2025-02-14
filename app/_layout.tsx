import { View, Text, Pressable, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import "../global.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { characterActions } from '@/core/actions/characterActions';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

// Create a client
const queryClient = new QueryClient()

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  characterActions();
  const [ fontsLoaded, error ] = useFonts({
    'Inter_28pt-Bold': require('../assets/fonts/Inter_28pt-Bold.ttf'),
    'Inter_28pt-Regular': require('../assets/fonts/Inter_28pt-Regular.ttf'),
    'Inter_28pt-SemiBold': require('../assets/fonts/Inter_28pt-SemiBold.ttf')
  });

  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])
  
  if(!fontsLoaded && !error) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Pantalla inicial */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* Pantalla de elección de división */}
        <Stack.Screen name="division/index" options={{ headerShown: false }} />
        {/* Tabs */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  )
}

export default RootLayout