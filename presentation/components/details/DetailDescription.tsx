import { View, Text } from 'react-native'
import React from 'react'

interface Props {
    name: string;
    inheritor?: string;
    height: string;
}

const DetailDescription = ({ name, inheritor, height }: Props) => {
  return (
    <View className='m-4 mt-2'>
      <Text className='text-white text-3xl font-inter-bold'>{name}</Text>
      <View className='flex flex-row items-center'>
        <Text className='text-netflixGreen text-xl m-2 ml-0 font-inter-semibold'>{inheritor}</Text>
        <Text className='text-white text-xl m-2'>Height</Text>
        <Text className='text-white text-xl pl-1 pr-1 border-[1px] border-white2 rounded-md m-2'>{height}</Text>
      </View>
    </View>
  )
}

export default DetailDescription