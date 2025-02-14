import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import erenFree from '../../../assets/images/home/erenfree.jpg';
import MainButton from '../MainButton';

const MainCard = () => {
  return (
    <View className='h-[60%] w-full justify-center items-center'>
      <ImageBackground className='h-full w-[90%]' source={erenFree}>
          <MainButton children='See episodes' className='absolute bottom-4 self-center'/>
      </ImageBackground>
    </View>
  )
}

export default MainCard