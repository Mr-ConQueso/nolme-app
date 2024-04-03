import React from 'react';
import {Text, View} from 'react-native';
import {Stack} from "expo-router";
import ExercisesPage from "../../components/pages/sindarin/exercises/ExercisesPage";
import Footer from "../../components/common/footer/Footer";

export default function CenteredPage() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: false, title: "Settings" }} />
            <Text>Index page of Exercises Tab</Text>

            <ExercisesPage />

            <Footer />
        </View>
    );
};
