import { View, Text, Image } from 'react-native'
import React from 'react'
import DivisionSquare from '@/presentation/components/DivisionSquare'
import policeImg from '../../assets/images/divisions/2.jpg'
import garrisonImg from '../../assets/images/divisions/3.jpg'
import traineeImg from '../../assets/images/divisions/4.jpg'
import logo from '../../assets/images/divisions/logo.png';

const DivisionScreen = () => {
  return (
    <View className='bg-black flex-1'>
      <Image source={logo} className='h-[50px] w-[160px] self-center m-2'/>
      <View className='flex-1 justify-center items-center pb-16'>
        <Text className='text-white text-center font-inter-regular text-2xl mb-8'>Choose your division</Text>
        <View className='flex-row'>
          <DivisionSquare title='Scout'/>
          <DivisionSquare title='Police' image={policeImg}/>
        </View>
        <View className='flex-row'>
          <DivisionSquare title='Garrison' image={garrisonImg}/>
          <DivisionSquare title='Trainee' image={traineeImg}/>
        </View>
      </View>
    </View>
  )
}

export default DivisionScreen