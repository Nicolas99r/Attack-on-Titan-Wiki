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
                /* headerBlurEffect: 'regular',
                headerTransparent: true */
            }}
        />
    </Stack>
  )
}

export default StackLayout