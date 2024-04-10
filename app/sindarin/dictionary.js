import React from 'react';
import {View} from 'react-native';
import DictionaryPage from "../../components/pages/sindarin/dictionary/DictionaryPage";
import {Stack} from "expo-router";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import {COLORS} from "../../constants";

export default function CenteredPage() {
    return (
        <View style={{flex: 1, backgroundColor: COLORS.background}}>
            <Stack.Screen options={{ headerShown: false, title: "Dictionary" }} />

            <Header />

            <DictionaryPage />

            <Footer />
        </View>
    );
};
