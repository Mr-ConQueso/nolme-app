import React from 'react';
import {Text} from 'react-native';
import {SIZES, FONTS} from "../../constants/Theme";
import Colors from "../../constants/Colors";

export default function AppH1 ({ children, style }) {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const styles = {
    text: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.h1,
        color: Colors.dark.heading
    },
};