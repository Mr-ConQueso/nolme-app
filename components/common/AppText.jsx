import React from 'react';
import { Text } from 'react-native';
import {SIZES, FONT} from "../../constants";

const AppText = ({ children }) => {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
};

const styles = {
    text: {
        fontSize: SIZES.paragraphSmall,
        lineHeight: 15,
        fontFamily: FONT.regular
    },
};

export default AppText;
