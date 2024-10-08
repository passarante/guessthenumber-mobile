import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

type UserGuessProps = {
  guess: number;
  guessedNumber: number;
  index: number;
};

const UserGuess = ({ guess, guessedNumber, index }: UserGuessProps) => {
  const [correctNumbers, setCorrectNumbers] = useState(0);
  const [correctPlaces, setCorrectPlaces] = useState(0);

  useEffect(() => {
    if (guess === guessedNumber) {
      setCorrectNumbers(4);
      setCorrectPlaces(4);
    } else {
      setCorrectNumbers(0);
      setCorrectPlaces(0);
      const guessStrArr = guess.toString().split('');
      console.log('guessedNumber', guessedNumber, index);
      for (let i = 0; i < guessStrArr.length; i++) {
        if (guessStrArr[i] === guessedNumber.toString()[i]) {
          setCorrectPlaces((correctPlaces) => correctPlaces + 1);
        } else if (guessedNumber.toString().includes(guessStrArr[i])) {
          setCorrectNumbers((correctNumbers) => correctNumbers + 1);
        }
      }
    }
  }, [guess]);

  return (
    <View className="flex flex-row items-center justify-between border-b border-red-700 bg-white p-2 ">
      <View className="flex flex-row gap-2 ">
        {guessedNumber
          .toString()
          .split('')
          .map((num, index) => (
            <View
              key={index}
              className="h-10 w-10 items-center justify-center rounded-lg bg-slate-400 p-2">
              <Text className="font-bold text-white">{num}</Text>
            </View>
          ))}
      </View>
      <View className="flex flex-row gap-2">
        <View className="h-10 w-10 items-center justify-center rounded-lg bg-green-600 p-2">
          <Text className="font-bold text-white">{correctPlaces} </Text>
        </View>
        <View className="h-10 w-10 items-center justify-center rounded-lg bg-red-600 p-2">
          <Text className="font-bold text-white">{correctNumbers} </Text>
        </View>
      </View>
    </View>
  );
};

export default UserGuess;
