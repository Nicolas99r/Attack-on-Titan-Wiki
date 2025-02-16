import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { useCharacters } from '@/presentation/hooks/useCharacters'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainCard from '@/presentation/components/cards/MainCard'

const HomeScreen = () => {

  const safeArea = useSafeAreaInsets();
  const { allCharactersQuery } = useCharacters();

  if (allCharactersQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1 bg-black'>
        <ActivityIndicator color='red' size={50}/>
      </View>
    )
  }

  return (
    <View className='flex-1 bg-black pt-4'>
      <MainCard/>
    </View>
  )
}

export default HomeScreen