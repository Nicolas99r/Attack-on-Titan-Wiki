import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import TitanCard from './cards/TitanCard';
import { useCharacters } from '../hooks/useCharacters';

interface Props {
  name: string;
}

const ListComponent = ({ name }: Props) => {
  const { allTitansQuery } = useCharacters();

  if (allTitansQuery.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (allTitansQuery.isError) {
    return <Text>Error loading titans</Text>;
  }

  return (
    <View className="mt-4">
      <View className="m-3 flex-row justify-between">
        <Text className="text-white text-lg font-inter-bold">{name}</Text>
        <Text className="text-white text-lg">
          See All <Ionicons name="chevron-forward-outline" />
        </Text>
      </View>
      <TitanCard titans={allTitansQuery.data ?? []} />
    </View>
  );
};

export default ListComponent;