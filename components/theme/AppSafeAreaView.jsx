import React from 'react';
import {Platform, SafeAreaView} from 'react-native';
import {responsiveHeight} from "react-native-responsive-dimensions";

export default function AppSafeAreaView ({ children, style }) {
    return (
        <SafeAreaView style={[styles.safeView, style]}>
            {children}
        </SafeAreaView>
    );
};

const styles = {
    safeView: {
        paddingTop: Platform.OS === "android" ? 60 : 0,
    },
};