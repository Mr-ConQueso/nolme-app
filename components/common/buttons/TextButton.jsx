import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './textbutton.style';

const TextButton = ({text, onTap}) => {
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
            ]}>
            <Text style={styles.buttonText}>{ text }</Text>
        </Pressable>
    );
}

export default TextButton;
