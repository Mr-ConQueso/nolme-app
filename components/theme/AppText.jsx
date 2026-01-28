import React from 'react';
import {Text} from 'react-native';
import {FONTS, SIZES} from "../../constants/Theme";
import Colors from "../../constants/Colors";

export default function AppText ({ children, style}) {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const styles = {
    text: {
        fontSize: SIZES.paragraphSmall,
        fontFamily: FONTS.default,
        color: Colors.dark.text
    },
};