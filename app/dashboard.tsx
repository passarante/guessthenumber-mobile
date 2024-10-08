import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Dashboard = () => {
  return (
    <View className="flex-1 bg-black p-10 text-white">
      <View className="mt-4 gap-4">
        <Link href="/game/single" asChild>
          <TouchableOpacity className="flex w-full items-center rounded-xl bg-gray-600 p-4">
            <Text className="text-white">Tekli Oyun Başlat</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity className="flex w-full items-center rounded-xl bg-gray-600 p-4">
          <Text className="text-white">Çoklu Oyun Başlat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
