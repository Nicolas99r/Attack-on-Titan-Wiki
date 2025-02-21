import { View, Text, ActivityIndicator, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useTitan } from '@/presentation/hooks/useTitan';
import DetailHeader from '@/presentation/components/details/DetailHeader';

const DetailsScreen = () => {

  const { id } = useLocalSearchParams<{id: string}>();
  const { titanQuery } = useTitan(+id);

  if(titanQuery.isLoading || !titanQuery.data){
    return(
      <View className='flex flex-1 justify-center items-center bg-black'>
        <ActivityIndicator color='red' size={30}/>
      </View>
    )
  }

  return (
    <ScrollView className='bg-black'>
      {/* <Text className='text-white'>{titanQuery.data.name}</Text> */}
      <ImageBackground source={{uri: titanQuery.data.img}} resizeMode='cover' className='flex-1' blurRadius={20}>
        <DetailHeader image={titanQuery.data.img}/>
      </ImageBackground>
    </ScrollView>
  )
}

export default DetailsScreen