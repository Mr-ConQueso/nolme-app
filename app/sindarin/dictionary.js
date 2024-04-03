import React from 'react';
import {Text, View} from 'react-native';
import DictionaryPage from "../../components/pages/sindarin/dictionary/DictionaryPage";
import {Stack} from "expo-router";
import Footer from "../../components/common/footer/Footer";

export default function CenteredPage() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: false, title: "Settings" }} />
            <Text>Index page of Dictionary Tab</Text>

            <DictionaryPage />

            <Footer />
        </View>
    );
};
