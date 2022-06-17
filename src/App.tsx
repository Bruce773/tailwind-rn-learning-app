import React from 'react';
import { SafeAreaView } from 'react-native';
import { LandingScreen } from './LandingScreen';
import tw from './tailwind';

export const App: React.FC = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <LandingScreen />
    </SafeAreaView>
  );
};
