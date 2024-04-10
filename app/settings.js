import { Stack } from "expo-router";
import { Text, View } from "react-native";
import {COLORS} from "../constants";

export default function Page() {
    return (
        <View style={{flex: 1, backgroundColor: COLORS.background}}>
            <Stack.Screen options={{ headerShown: false, title: "Settings" }} />
            <Text>Index page of Settings Tab</Text>
        </View>
    );
}