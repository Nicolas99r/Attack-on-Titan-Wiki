import { View, Text, FlatList, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Titan } from '@/infrastructure/interfaces/titan.interface'; // Importa la interfaz correcta
import { Link, router } from 'expo-router';

const FallbackImage = require('../../../assets/images/home/placeholder1c.png'); // Imagen de respaldo

interface Props {
  titans: Titan[]; // Usa la interfaz Titan
}

const TitanCard = ({ titans }: Props) => {

  const [validImages, setValidImages] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const checkImages = async () => {
      const results: { [key: string]: boolean } = {};

      for (const titan of titans) {
        if (titan.img) {
          try {
            await Image.prefetch(titan.img);
            results[titan.id] = true;
          } catch {
            results[titan.id] = false;
          }
        } else {
          results[titan.id] = false;
        }
      }
      setValidImages(results);
    };

    checkImages();
  }, [titans]);

  return (
    <View>
      <FlatList
        horizontal
        data={titans}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Pressable
            className='active:opacity-35'
            onPress={() => router.push({pathname: `/home/titans/${item.id}`})}
          >
            <Image
                source={validImages[item.id] ? { uri: item.img } : FallbackImage}
                className="h-36 w-36 m-2 rounded-3xl"
            />
            <Text className='text-white1 ml-2 p-4 absolute bottom-0'>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default TitanCard;