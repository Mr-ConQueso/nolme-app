import React from 'react';
import {Text} from 'react-native';
import {COLORS, FONT, SIZES} from "../../constants";

const AppText = ({ children, style }) => {
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
        fontFamily: FONT.tengwar,
        color: COLORS.text
    },
};

export default AppText;
