import { Entypo, Feather } from '@expo/vector-icons';
import React, { ReactNode } from 'react';
import { Text, TouchableOpacity } from 'react-native';

type GameKeyProps = {
  num?: number;
  type: 'num' | 'delete' | 'check';
  onPress: (num: number, type: 'num' | 'delete' | 'check') => void;
};

const GameKey = ({ num = 0, type, onPress }: GameKeyProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(num, type)}
      className="flex items-center justify-center w-1/4 h-20 p-2 rounded-md bg-slate-300 ">
      {num > 0 && <Text className="text-3xl font-bold">{num}</Text>}
      {type === 'delete' && <Feather name="trash" size={24} />}
      {type === 'check' && <Entypo name="check" size={24} />}
    </TouchableOpacity>
  );
};

export default GameKey;
