import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';

import GameKeys from '~/components/GameKeys';
import UserGuess from '~/components/UserGuess';

const SingleGame = () => {
  const [guess, setGuess] = useState(5462);
  const [userGuess, setUserGuess] = useState<number[]>([]);

  const handleAddGuess = (guessedNumber: number) => {
    setUserGuess((prev) => [guessedNumber, ...prev]);
    console.log('UGS', userGuess);
  };

  return (
    <View className="flex h-full flex-col justify-between bg-white p-2">
      <Stack.Screen options={{ title: 'Tekli Oyun ' }} />
      {/* Header */}
      <View className="flex-1 overflow-y-auto">
        <FlatList
          data={userGuess}
          renderItem={({ item, index }) => (
            <UserGuess guess={guess} guessedNumber={item} index={index} />
          )}
          className="mt-4"
        />
      </View>
      <View className="border-1 rounded-md border-t border-white/70 pt-4">
        <GameKeys handleAddGuess={handleAddGuess} />
      </View> 
    </View>
  );
};

export default SingleGame;
