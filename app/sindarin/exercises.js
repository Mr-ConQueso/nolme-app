import React from 'react';
import {View} from 'react-native';
import {Stack} from "expo-router";
import ExercisesPage from "../../components/pages/sindarin/exercises/ExercisesPage";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";

export default function CenteredPage() {
    return (
        <View style={{flex: 1}}>
            <Stack.Screen options={{ headerShown: false, title: "Exercises" }} />

            <Header />

            <ExercisesPage />

            <Footer />
        </View>
    );
};
