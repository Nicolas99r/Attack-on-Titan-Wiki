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
            name='home/index'
            options={{
                title: 'Home',
            }}
        />
    </Stack>
  )
}

export default StackLayout