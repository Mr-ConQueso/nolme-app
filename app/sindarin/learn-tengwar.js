import React from 'react';
import {Text, View} from 'react-native';
import {Stack} from "expo-router";
import LearnTengwarPage from "../../components/pages/sindarin/learn_script/LearnTengwarPage";
import Footer from "../../components/common/footer/Footer";

export default function CenteredPage() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: false, title: "Settings" }} />

            <LearnTengwarPage />

            <Footer />
        </View>
    );
};
