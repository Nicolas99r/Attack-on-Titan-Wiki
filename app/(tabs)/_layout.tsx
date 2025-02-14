import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <Ionicons size={28} name='home' color={color}/>
        }}
      />
      <Tabs.Screen
        name='episodes'
        options={{
          title: 'Episodes',
          tabBarIcon: ({color}) => <Ionicons size={28} name='images-outline' color={color}/>
        }}
      />
      <Tabs.Screen
        name='mydivision'
        options={{
          title: 'My Division',
          tabBarIcon: ({color}) => <Ionicons size={28} name='sad-outline' color={color}/>
        }}
      />
    </Tabs>
  )
}

export default TabsLayout