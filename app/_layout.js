import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  useFonts
} from '@expo-google-fonts/lato';
import {Slot, Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from 'react';

import {useColorScheme} from '../components/theme/useColorScheme';
import {ClerkProvider, useAuth} from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store"

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

const tokenCache = {
  getToken: async function(key) {
    try {
      return await SecureStore.getItemAsync(key);
    }
    catch (error) {
      return error;
    }
  },
  saveToken: async function(key, value) {
    try {
      return await SecureStore.setItemAsync(key, value);
    }
    catch (error) {
      return error;
    }
  }
};

const InitialLayout = () => {
  return <Slot />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
      <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <InitialLayout />
          <Stack>
            <Stack.Screen name="(tabs)/sindarin" options={{ headerShown: false }} />
            <Stack.Screen name="languageModal" options={{ presentation: 'modal' }} />
            <Stack.Screen name="userModal" options={{ presentation: 'modal' }} />
          </Stack>
        </ThemeProvider>
      </ClerkProvider>
  );
}
