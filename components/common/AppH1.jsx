import React from 'react';
import { Text } from 'react-native';
import {SIZES, FONT} from "../../constants";

const AppH1 = ({ children }) => {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
};

const styles = {
    text: {
        fontFamily: FONT.bold,
        fontSize: SIZES.h1,
        lineHeight: 15,
    },
};

export default AppH1;
