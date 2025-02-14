import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack
        screenOptions={{
          headerShown: false
        }}
    >
        <Stack.Screen
            name='episodes/index'
            options={{
                title: 'Episodes',
            }}
        />
    </Stack>
  )
}

export default StackLayout