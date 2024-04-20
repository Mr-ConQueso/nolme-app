import React from 'react';
import {Text} from 'react-native';
import {SIZES} from "../../constants/Theme";
import Colors from "../../constants/Colors";

export default function AppTengwarText ({ children, style }) {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const styles = {
    text: {
        fontSize: SIZES.paragraphSmall,
        lineHeight: 15,
        fontFamily: "Tengwar",
        color: Colors.dark.text
    },
};