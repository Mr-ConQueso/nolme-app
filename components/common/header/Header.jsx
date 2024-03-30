import React from 'react';
import { View } from 'react-native';
import ButtonIcon from '../ButtonIcon';
import styles from './header.style';

const Header = () => {
    return (
        <View style={styles.container}>
            {/* Language button */}
            <ButtonIcon
                size={30}
                defaultSvgPath={require('../../../assets/icons/sindarin-flag.svg')}
                pressedSvgPath={require('../../../assets/icons/sindarin-flag.svg')}
                onPress={() => {
                    // Handle left button press
                }}
            />
            {/* Settings button */}
            <ButtonIcon
                size={30}
                defaultSvgPath={require('../../../assets/icons/settings.svg')}
                pressedSvgPath={require('../../../assets/icons/settings.svg')}
                onPress={() => {
                    // Handle right button press
                }}
            />
        </View>
    );
};

export default Header;
