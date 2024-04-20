import React from 'react';
import {Text} from 'react-native';
import {SIZES} from "../../constants/Theme";
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
        fontFamily: "Lato",
        color: Colors.dark.text
    },
};