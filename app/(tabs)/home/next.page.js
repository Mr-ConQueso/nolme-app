import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NextPage() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: true, title: "Next Page" }} />
            <Text>Next page of Home Tab</Text>
        </View>
    );
}