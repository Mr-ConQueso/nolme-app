import {Link, SplashScreen, Stack} from "expo-router";
import {Pressable, ScrollView, Text, View} from "react-native";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";
import {COLORS, FONT} from "../constants";
import React from "react";
import AppText from "../components/common/AppText";
import AppH1 from "../components/common/AppH1";

SplashScreen.preventAutoHideAsync();

export default function App() {

    return (
    <View style={{flex: 1, backgroundColor: COLORS.background}}>
        <Stack.Screen options={{headerShown: false, title: "Home"}}/>

        <Header/>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
                <Text style={{fontFamily: FONT.tengwar}}>
                    This is a tengwar test
                </Text>
                <Text style={{fontFamily: FONT.cirth}}>
                    This is a cirth test
                </Text>
                <AppText>
                    This is a Lato Test
                </AppText>
                <AppH1>
                    This is a Lato Heading
                </AppH1>

                <Link href="/sindarin/learn-tengwar" asChild>
                    <Pressable>
                        <Text>Tengwar</Text>
                    </Pressable>
                </Link>

            </View>
        </ScrollView>

        <Footer/>
    </View>
    );
}