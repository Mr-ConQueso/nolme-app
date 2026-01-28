import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  useFonts
} from '@expo-google-fonts/lato';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, {useCallback} from 'react';

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,

    Tengwar_Telcontar: require('../assets/fonts/Tengwar Telcontar.ttf'),
    Tengwar_Feanor: require('../assets/fonts/Tengwar Feanor.ttf'),
    Cirth: require('../assets/fonts/Tolkien Dwarf Runes.ttf'),
    ...FontAwesome.font,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)/sindarin" options={{ headerShown: false }} />
        </Stack>
  );
}
