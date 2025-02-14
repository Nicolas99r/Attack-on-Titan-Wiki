import { Text, Image, Pressable, Animated } from 'react-native'
import React from 'react'
import defaultImage from '../../assets/images/divisions/1.jpg';
import { useNavigation, useRouter } from 'expo-router';

interface Props {
    title: string;
    image?: string;
    className?: string;
}

const DivisionSquare = ({ title, image, className }: Props) => {

    const router = useRouter();
    const scale = new Animated.Value(1); // Valor animado para la opacidad

    const handlePressIn = () => {
        Animated.timing(scale, {
          toValue: 0.8,
          duration: 150, // Duración de la animación en milisegundos
          useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(scale, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }).start();
        router.push('/(tabs)/home');
      };

  return (
    <Pressable 
        className={`w-[100px] m-4 justify-center items-center ${className}`}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
    >
      <Animated.Image 
        source={image ? image : defaultImage} 
        className='h-[100px] w-[100px] rounded-lg' 
        style={{
            transform: [{scale}]
        }}
      />
      <Text className='text-wrap font-inter-regular text-lg text-center text-white mt-2'>{title}</Text>
    </Pressable>
  )
}

export default DivisionSquare