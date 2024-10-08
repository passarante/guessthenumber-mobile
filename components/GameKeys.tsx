import React, { useState } from 'react';
import { View } from 'react-native';

import GameKey from './GameKey';
import GuessNumber from './GuessNumber';

interface GameKeysProps {
  handleAddGuess: (userGuess: number) => void;
}

const GameKeys = ({ handleAddGuess }: GameKeysProps) => {
  const [nums, setNums] = useState(['?', '?', '?', '?']);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyPress = (num: number, type = 'num') => {
    const tempArr = nums;
    if (type === 'num') {
      if (nums.includes(num.toString())) return;
      tempArr[activeIndex] = num.toString();

      if (activeIndex === 3) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => prev + 1);
      }
    } else if (type === 'delete') {
      tempArr[activeIndex] = '?';
      if (activeIndex !== 0) {
        setActiveIndex((prev) => prev - 1);
      }
    } else if (type === 'check') {
      if (nums.includes('?')) return;
      const userGuess = parseInt(nums.join(''));
      if (userGuess === 5462) {
        alert('Tebrikler, 5462yi buldunuz!');
      } else {
        handleAddGuess(userGuess);
      }
    }
    setNums(tempArr);
  };

  return (
    <View>
      <View className="mx-auto flex w-4/6 flex-row items-center justify-center gap-4 ">
        <GuessNumber setActiveIndex={setActiveIndex} num={nums[0]} actIndex={activeIndex} idx={0} />
        <GuessNumber setActiveIndex={setActiveIndex} num={nums[1]} actIndex={activeIndex} idx={1} />
        <GuessNumber setActiveIndex={setActiveIndex} num={nums[2]} actIndex={activeIndex} idx={2} />
        <GuessNumber setActiveIndex={setActiveIndex} num={nums[3]} actIndex={activeIndex} idx={3} />
      </View>
      <View className="w-5/7 mx-auto mt-4 flex flex-row items-center justify-center ">
        <View className="flex flex-row flex-wrap items-center justify-center gap-2 rounded-lg bg-black p-2">
          <GameKey num={1} onPress={handleKeyPress} type="num" />
          <GameKey num={2} onPress={handleKeyPress} type="num" />
          <GameKey num={3} onPress={handleKeyPress} type="num" />
          <GameKey num={4} onPress={handleKeyPress} type="num" />
          <GameKey num={5} onPress={handleKeyPress} type="num" />
          <GameKey num={6} onPress={handleKeyPress} type="num" />
          <GameKey num={7} onPress={handleKeyPress} type="num" />
          <GameKey num={8} onPress={handleKeyPress} type="num" />
          <GameKey num={9} onPress={handleKeyPress} type="num" />

          <GameKey onPress={handleKeyPress} type="delete" />
          <GameKey onPress={handleKeyPress} type="check" />
        </View>
      </View>
    </View>
  );
};

export default GameKeys;
