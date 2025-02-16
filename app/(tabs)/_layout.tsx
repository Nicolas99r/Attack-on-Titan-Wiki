import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

const TabsLayout = () => {

  const bgColor = '#0C0C0C'

  return (
    <Tabs
      screenOptions={{
        /* headerShown: false */
        headerTitle: 'Attack on Titan Wiki',
        headerTintColor: 'white',
        headerRight: () => <Ionicons name='search-outline' size={28} color='white' style={{marginRight: 10}}/>,
        headerStyle: {
          backgroundColor: 'rgba(0,0,0,0.8)'
        },
        headerTransparent: true,
        tabBarStyle: {
          backgroundColor: bgColor,
          borderTopWidth: 0, // Elimina la línea blanca
          elevation: 0, // Quita sombras en Android
          height: 55
        },
        /* tabBarItemStyle: {
          paddingVertical: 5
        },
        tabBarLabelStyle: {
          paddingVertical: 5
        }, */
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <Ionicons size={24} name='home' color={color}/>
        }}
      />
      <Tabs.Screen
        name='episodes'
        options={{
          title: 'Episodes',
          tabBarIcon: ({color}) => <Ionicons size={24} name='images-outline' color={color}/>
        }}
      />
      <Tabs.Screen
        name='mydivision'
        options={{
          title: 'My Division',
          tabBarIcon: ({color}) => <Ionicons size={24} name='sad-outline' color={color}/>
        }}
      />
    </Tabs>
  )
}

export default TabsLayout