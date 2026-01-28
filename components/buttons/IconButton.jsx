import React from 'react';
import {Image, Pressable} from 'react-native';
import {useNavigation} from "expo-router";

export default function IconButton({ size, defaultIcon, unActiveIcon, isActive, onPress, style}, disabled) {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={({ pressed }) => [
                {
                    opacity: pressed
                        ? 0.2
                        : 1,
                },
                styles.pressableContainer,
            ]}>
            <Image
                source={isActive ? defaultIcon : unActiveIcon }
                style={{ width: size, height: size }}
            />
        </Pressable>
    );
};

const styles= ({
    pressableContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});