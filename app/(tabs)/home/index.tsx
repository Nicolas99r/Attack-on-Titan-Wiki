import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useCharacters } from '@/presentation/hooks/useCharacters'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets();
  const { allCharactersQuery } = useCharacters();

  if (allCharactersQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='purple' size={50}/>
      </View>
    )
  }

  return (
    <View className='mt-2' style={{paddingTop: safeArea.top}}>
      <Text className='text-3xl font-bold px-4 mb-2'>Attack on Titan Wiki</Text>
    </View>
  )
}

export default HomeScreen