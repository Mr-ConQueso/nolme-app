import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import SvgUri from 'expo-svg-uri';
import styles from './buttonicon.style';

const ButtonIcon = ({ size, defaultSvgPath, pressedSvgPath, onPress }) => {
    const [isPressed, setIsPressed] = useState(false);
    //const iconPath = "../assets/icons/";

    const handlePress = () => {
        setIsPressed(true);
        onPress(); // Call the onPress function passed from the parent component
        // Reset pressed state after a short delay (you can adjust the delay as needed)
        setTimeout(() => setIsPressed(false), 100);
    };

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
        >
            <SvgUri
                width={size}
                height={size}
                source={isPressed ? pressedSvgPath : defaultSvgPath}
            />
        </TouchableOpacity>
    );
};

export default ButtonIcon;
