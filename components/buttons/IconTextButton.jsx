import React from 'react';
import { Image, Pressable } from 'react-native';
import { SIZES } from "../../constants/Theme";
import Colors from "../../constants/Colors";
import AppH1 from "../theme/AppH1";
import {responsiveWidth} from "react-native-responsive-dimensions";

export default function IconTextButton({ title, onPress, style, disabled, isActive, size, defaultIcon, unActiveIcon, ...props }) {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                styles.pressableContainer,
                isActive ? styles.activeButton : styles.inactiveButton,
                pressed && styles.hoveredButton,
                style
            ]}
            {...props}
        >
            <Image
                source={isActive ? defaultIcon : unActiveIcon}
                style={{ width: size, height: size }}
            />
            <AppH1 style={styles.buttonText}>{title}</AppH1>
        </Pressable>
    );
}

const styles = {
    pressableContainer: {
        width: responsiveWidth(12),
        flexDirection: 'row',
        padding: 10,
        backgroundColor: Colors.dark.background,
        borderRadius: SIZES.defaultRounding,
        marginVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.dark.text,
        fontSize: SIZES.paragraphSmall,
        fontWeight: 'bold',
        paddingLeft: 12
    },
    activeButton: {
        backgroundColor: Colors.dark.gray,
        borderColor: Colors.dark.tertiary,
        borderWidth: SIZES.defaultBorderWidth,
    },
    inactiveButton: {
    },
    hoveredButton: {
        backgroundColor: Colors.dark.gray,
    }
};