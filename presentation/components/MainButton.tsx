import { View, Text, PressableProps, Pressable, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

interface Props extends PressableProps {
    children: string;
    className?: string;
}

const MainButton = React.forwardRef(({children, className}: Props, ref: React.Ref<Text>) => {
  return (
    <Pressable className={`bg-white w-[80%] h-11 rounded-md justify-center items-center flex-row active:scale-105 ${className}`}>
        <Ionicons name='caret-forward-outline' size={28} color='black'/>
        <Text className='text-black font-inter-bold text-xl'>{children}</Text>
    </Pressable>
  )
})

export default MainButton