import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { Titan } from '@/infrastructure/interfaces/titan.interface'; // Importa la interfaz correcta

interface Props {
  titans: Titan[]; // Usa la interfaz Titan
}

const TitanCard = ({ titans }: Props) => {
  return (
    <View>
      <FlatList
        horizontal
        data={titans}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <View className='flex-col'>
            <Image
                source={item.img ? { uri: item.img } : require('../../../assets/images/home/placeholder.png')}
                className="h-36 w-36 m-2 rounded-3xl"
            />
            <Text className='text-white1 ml-2 p-4 absolute bottom-0'>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TitanCard;