import React from 'react';
import {Stack} from 'expo-router';
import {View} from 'react-native';
import NavBar from "../../../components/NavBar";

export default function TabLayout() {
  return (
      <View style={{ flex: 1 }} screenOptions={{ headerShown: false }}>
          <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="dictionary" options={{ headerShown: false }} />
              <Stack.Screen name="tengwar" options={{ headerShown: false }} />
              <Stack.Screen name="exercises" options={{ headerShown: false }} />
              <Stack.Screen name="profile" options={{ headerShown: false }} />
          </Stack>
          <NavBar />
      </View>
  );
}
