import React from 'react';
import tw from '../tailwind';
import { Pressable, Text, View } from 'react-native';

export const LandingScreen: React.FC = () => (
  <>
    <View style={tw`flex-1 items-center justify-center mt-60`}>
      <View style={tw`bg-tannish p-16px rounded-6`}>
        <Text style={tw`text-4xl text-darker-green font-bold`}>WhatReads</Text>
      </View>
      <View style={tw`w-50 items-center mt-5`}>
        <Text style={tw`flex-wrap justify-evenly content-around text-[20px]`}>
          ... humans do!
        </Text>
      </View>
    </View>
    <View style={tw`flex-1 items-center justify-center mt-7`}>
      <Pressable style={tw`p-12px rounded-4 bg-pale-green`}>
        <Text style={tw`text-xl tracking-wide`}>Continue</Text>
      </Pressable>
    </View>
  </>
);
