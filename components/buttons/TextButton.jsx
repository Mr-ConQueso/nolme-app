import React from 'react';
import {Pressable} from 'react-native';
import {SIZES} from "../../constants/Theme";
import Colors from "../../constants/Colors";
import AppH1 from "../theme/AppH1";

export default function TextButton ({title, onTap, style}) {
    return (
        <Pressable
            onPress={onTap}
            style={({ pressed }) => [
                {
                    opacity: pressed
                        ? 0.2
                        : 1,
                    backgroundColor: '#2277ee'
                },
                styles.pressableContainer,
                style
            ]}>
            <AppH1 style={styles.buttonText}>{title}</AppH1>
        </Pressable>
    );
}

const styles = ({
    pressableContainer: {
        padding: 10,
        backgroundColor: Colors.dark.tertiary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.dark.text,
        fontSize: SIZES.paragraphSmall,
        fontWeight: 'bold',
    },
});
