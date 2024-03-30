import React, {useState} from 'react';
import {Image, Pressable} from 'react-native';

import styles from './buttonicon.style';

const ButtonIcon = ({ size, defaultIcon, pressedIcon, onPress }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(true);
        onPress(); // Call the onPress function passed from the parent component
        // Reset pressed state after a short delay (you can adjust the delay as needed)
        setTimeout(() => setIsPressed(false), 100);
    };

    return (
        <Pressable
            style={styles.buttonContainer}
            onPress={handlePress}
        >
            <Image
                source={isPressed ? pressedIcon : defaultIcon}
                resourceMode='cover'
                style={styles.buttonImage(size)}
            />
        </Pressable>
    );
};

export default ButtonIcon;
