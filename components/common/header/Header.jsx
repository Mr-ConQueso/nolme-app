import React from 'react';
import {View} from 'react-native';
import ButtonIcon from '../ButtonIcon';
import styles from './header.style';
import {icons} from "../../../constants";

const Header = () => {
    return (
        <View style={styles.container}>
            {/* Language button */}
            <ButtonIcon
                size={30}
                defaultSvgPath={icons.sindarinFlag}
                pressedSvgPath={icons.sindarinFlag}
                onPress={() => {
                    // Handle left button press
                }}
            />
            {/* Settings button */}
            <ButtonIcon
                size={30}
                defaultSvgPath={icons.settings}
                pressedSvgPath={icons.settings}
                onPress={() => {
                    // Handle right button press
                }}
            />
        </View>
    );
};

export default Header;
