import React from 'react';
import {Image, Pressable} from 'react-native';
import {useNavigation} from "expo-router";

export default function ButtonIcon({ size, defaultIcon, url }) {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(url);
    };

    return (
        <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
                {
                    opacity: pressed
                        ? 0.2
                        : 1,
                },
                styles.pressableContainer,
            ]}>
            <Image
                style={styles.buttonImage(size)}
                source={ defaultIcon }
            />
        </Pressable>
    );
};

const styles= ({
    pressableContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1,
        borderWidth: 1,
    },
    buttonImage: (dimension) => ({
        width: dimension,
        height: dimension,
    }),
});