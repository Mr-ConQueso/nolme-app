import React from 'react';
import {Text} from 'react-native';
import {FONTS, SIZES} from "../../constants/Theme";
import Colors from "../../constants/Colors";

export default function AppH2 ({ children, style }) {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const styles = {
    text: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.h2,
        lineHeight: 15,
        color: Colors.dark.subtitle
    },
};