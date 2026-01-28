import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Colors from "../../constants/Colors";
import AppH1 from "../../components/theme/AppH1";
import {SIZES} from "../../constants/Theme";
import NavBar from "../../components/NavBar";
import AppSafeAreaView from "../../components/theme/AppSafeAreaView";

export default function MainScreen() {
    return (
        <AppSafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={[styles.body]}>

                <AppH1 style={styles.heading}>Learning Exercises</AppH1>

            </ScrollView>
            <NavBar />
        </AppSafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
    body: {
        width: SIZES.defaultContentWidth,
        paddingTop: 30,
        alignSelf: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: "flex-start",
        color: Colors.dark.tertiary,
    }
});
