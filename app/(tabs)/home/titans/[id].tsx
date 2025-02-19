import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DetailsScreen = () => {

  const { id } = useLocalSearchParams<{id: string}>();

  return (
    <View>
      <Text>Titan: {id}</Text>
    </View>
  )
}

export default DetailsScreen