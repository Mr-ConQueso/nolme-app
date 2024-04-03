import React, {useState} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './textbutton.style';

const TextButton = ({ text }) => {
    const [pressed, setPressed] = useState(false);

    return (
        <Pressable
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            style={({ pressed }) => [
                {
                    borderColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.pressableContainer, // Apply additional styles from styles.js
            ]}
        >
            <Text style={styles.buttonText}>{pressed ? 'Pressed!' : text}</Text>
        </Pressable>
    );
};

export default TextButton;
