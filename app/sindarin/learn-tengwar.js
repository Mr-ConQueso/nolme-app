import React from 'react';
import {View} from 'react-native';
import {Stack} from "expo-router";
import LearnTengwarPage from "../../components/pages/sindarin/learn_script/LearnTengwarPage";
import Footer from "../../components/common/footer/Footer";
import {COLORS} from "../../constants";

export default function CenteredPage() {
    return (
        <View style={{flex: 1, backgroundColor: COLORS.background}}>
            <Stack.Screen options={{ headerShown: false, title: "Tengwar" }} />

            <LearnTengwarPage />

            <Footer />
        </View>
    );
};
