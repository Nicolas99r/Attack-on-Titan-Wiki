import { View, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  image: string;
}

const DetailHeader = ({ image }: Props) => {
  return (
    <>
    <LinearGradient
      colors={['black', 'blue', 'transparent']}
      style= {{
        height: 50,
        position: 'absolute',
        zIndex: 1,
        width: '100%'
      }}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
    />
    <View className="w-full h-[500px] bg-gray-800">
      <Image
        source={{ uri: image }}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
    <LinearGradient
      colors={['transparent', 'black']}
      style= {{
        height: 50,
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        bottom: 0
      }}
    />
    </>
  );
};

export default DetailHeader;