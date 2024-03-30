import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './textbutton.style';

const TextButton = ({ text, onPress }) => {
    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

export default TextButton;
