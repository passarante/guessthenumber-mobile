import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type GuessNumberProps = {
  num: string;
  actIndex: number;
  idx: number;
  setActiveIndex: (num: number) => void;
};
const GuessNumber = ({ num, actIndex, setActiveIndex, idx }: GuessNumberProps) => {
  const classNames =
    actIndex === idx
      ? 'bg-green-600 shadow-lg flex h-16 w-16 items-center justify-center rounded-lg border border-[1px] border-gray-600   p-2'
      : 'bg-gray-300 shadow-lg flex h-16 w-16 items-center justify-center rounded-lg border border-[1px] border-gray-600 bg-gray-200  p-2';

  return (
    <TouchableOpacity className={classNames} onPress={() => setActiveIndex(idx)}>
      <Text>{num}</Text>
    </TouchableOpacity>
  );
};

export default GuessNumber;
