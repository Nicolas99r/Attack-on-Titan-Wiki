import { View, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useCharacters } from '@/presentation/hooks/useCharacters'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainCard from '@/presentation/components/cards/MainCard'
import ListComponent from '@/presentation/components/ListComponent'
import { useHeaderHeight } from '@react-navigation/elements';

const HomeScreen = () => {

  const headerHeight = useHeaderHeight();
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
    <ScrollView className='bg-black'>
      <View className='flex-1 bg-black pt-4' style={{paddingTop: headerHeight}}>
        <MainCard/>
        <ListComponent name='Titans'/>
        <ListComponent name='Locations'/>
        <ListComponent name='Organizations'/>
        <ListComponent name='Characters'/>
        <ListComponent name='Top 10 Episodes'/>
      </View>
    </ScrollView>
  )
}

export default HomeScreen