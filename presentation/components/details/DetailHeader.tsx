import { View, Image } from 'react-native';
import React from 'react';

interface Props {
    image: string;
}

const DetailHeader = ({ image }: Props) => {
  return (
    <View className="w-full h-[500px] bg-gray-800">
      <Image
        source={{ uri: image }}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
};

export default DetailHeader;