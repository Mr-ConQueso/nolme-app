import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './buttonicon.style';
import {useNavigation} from "expo-router";

const ButtonIcon = ({ size, defaultIcon, url }) => {
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

export default ButtonIcon;
