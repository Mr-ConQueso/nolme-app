import React from 'react';
import {Stack} from 'expo-router';
import {View} from 'react-native';
import NavBar from "../../../components/NavBar";

export default function TabLayout() {
  return (
      <View style={{ flex: 1 }} screenOptions={{ headerShown: false }}>
          <Stack>
              <Stack.Screen name="dictionary" options={{ headerShown: false }} />
          </Stack>
          <NavBar />
      </View>
  );
}
