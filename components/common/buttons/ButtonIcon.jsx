import React from 'react';
import { Image, Pressable } from 'react-native';

import styles from './buttonicon.style';

const ButtonIcon = React.forwardRef(({ size, defaultIcon }, ref) => {
    return (
        <Pressable
            ref={ref}
            style={({ pressed }) => [
                {
                    borderColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
            ]}
        >
            <Image
                source={defaultIcon}
                resourceMode="cover"
                style={styles.buttonImage(size)}
            />
        </Pressable>
    );
});

export default ButtonIcon;
