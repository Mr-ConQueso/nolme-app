import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: false, title: "Settings" }} />
            <Text>Index page of Settings Tab</Text>
        </View>
    );
}