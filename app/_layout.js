import {useFonts} from "expo-font";
import {SplashScreen, Stack} from "expo-router";
import {useCallback} from "react";

const Layout = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Tengwar-Telcontar': require('../assets/fonts/Tengwar Telcontar.ttf'),
        'Tengwar-Telcontar-Bold': require('../assets/fonts/Tengwar Telcontar Bold.ttf'),
        'Tolkien-Dwarf-Runes': require('../assets/fonts/Tolkien Dwarf Runes.ttf'),
        'Lato': require('../assets/fonts/Lato.ttf'),
        'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Stack initialRouteName="home">
            <Stack.Screen name="home" />
        </Stack>
    )
};

export default Layout;