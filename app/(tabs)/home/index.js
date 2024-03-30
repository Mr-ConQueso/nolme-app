import {Stack} from "expo-router";
import {ScrollView, View} from "react-native";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/Header";
import {COLORS, icons, SIZES} from "../../../constants";
import ButtonIcon from "../../../components/common/ButtonIcon";
import { StatusBar } from 'expo-status-bar';

export default function Page() {
    return (
        <View style={{flex: 1, backgroundColor: COLORS.lightWhite}} >
            <Stack.Screen options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ButtonIcon iconUrl={icons.sindarinFlag} dimension='60%' />
                    ),
                    headerRight: () => (
                        <ButtonIcon iconUrl={icons.settings} dimension='100%' />
                    ),
                    headerTitle: "",
                }}
            />

            <Header />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                </View>
            </ScrollView>

            <Footer />
        </View>
    );
}