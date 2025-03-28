import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  image: string;
}

const DetailHeader = ({ image }: Props) => {

  const navigation = useNavigation();

  return (
    <>
    <LinearGradient
      colors={['black', 'rgba(0,0,0,0.5)', 'transparent']}
      style= {{
        height: 50,
        position: 'absolute',
        zIndex: 1,
        width: '100%',
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
      {/* Botón de regresar */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute top-10 left-5 bg-white p-2 rounded-full"
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
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