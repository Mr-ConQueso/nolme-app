import React from 'react';
import { Text } from 'react-native';
import {SIZES, FONT, COLORS} from "../../constants";

const AppH1 = ({ children, style }) => {
    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const styles = {
    text: {
        fontFamily: FONT.bold,
        fontSize: SIZES.h1,
        lineHeight: 15,
        textColor: COLORS.heading
    },
};

export default AppH1;
