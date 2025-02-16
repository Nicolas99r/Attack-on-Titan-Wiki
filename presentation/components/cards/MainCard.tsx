import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import erenFree from '../../../assets/images/home/erenfree.jpg';
import MainButton from '../MainButton';
import logo from '../../../assets/images/home/Attack-on-Titan-Emblem1.png'

const MainCard = () => {
  return (
    <View className="h-[400px] w-full justify-center items-center">
      {/* Contenedor externo con bordes redondeados */}
      <View
        className="h-full w-[80%] rounded-2xl overflow-hidden relative border-[1px] border-white1"
        style={{ backgroundColor: '#000', elevation: 10 }} // Fondo de respaldo en caso de que la imagen no cubra todo
      >
        <Image
          source={erenFree}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          resizeMode="cover" // Asegura que la imagen se ajuste correctamente
        />

        <Image source={logo} className='w-5/6 max-h-20 absolute self-center bottom-24'/>
        <Text className="text-white1 absolute bottom-16 self-center">Hajime Isayama</Text>
        <MainButton children="See episodes" className="absolute bottom-4 self-center" />
      </View>
    </View>
  )
}

export default MainCard