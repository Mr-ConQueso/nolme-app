import { Stack } from "expo-router";
import { Text, View } from "react-native";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/Header";

export default function Page() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: true, title: "Home" }} />

            <Header />

            <Text>Index page of Home Tab</Text>
            <Link href={"/home/next-page"} style={{ marginTop: 16 }}>
                <Text style={{ fontWeight: "bold" }}>Go To Next Page</Text>
            </Link>

            <Footer />
        </View>
    );
}