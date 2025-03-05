import { View, Text, ActivityIndicator, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useTitan } from '@/presentation/hooks/useTitan';
import DetailHeader from '@/presentation/components/details/DetailHeader';
import DetailDescription from '@/presentation/components/details/DetailDescription';
import MainButton from '@/presentation/components/MainButton';

const DetailsScreen = () => {

  const { id } = useLocalSearchParams<{id: string}>();
  const { titanQuery } = useTitan(+id);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({headerShown: false})
  }, [navigation])
  

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
      <DetailDescription
        name={titanQuery.data.name}
        /* inheritor={titanQuery.data.former_inheritors} */
        height={titanQuery.data.height}
      />
      <MainButton children="Episodes list" className="self-center" />
    </ScrollView>
  )
}

export default DetailsScreen