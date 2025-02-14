import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack
        
    >
        <Stack.Screen
            name='mydivision/index'
            options={{
                title: 'My Division',
            }}
        />
    </Stack>
  )
}

export default StackLayout