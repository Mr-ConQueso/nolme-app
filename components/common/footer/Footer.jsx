import React from 'react';
import { View } from 'react-native';
import ButtonIcon from '../ButtonIcon';
import styles from './footer.style';

const Footer = () => {
    return (
        <View style={styles.container}>
            {/* HOME */}
            <ButtonIcon
                size={30}
                defaultSvgPath={require('../../../assets/icons/home.svg')}
                pressedSvgPath={require('../../../assets/icons/home.svg')}
                onPress={() => {
                    // Handle navigation for button 1
                }}
            />
            {/* SCRIPT */}
            <ButtonIcon
                size={30}
                defaultSvgPath={require('../../../assets/icons/script.svg')}
                pressedSvgPath={require('../../../assets/icons/script.svg')}
                onPress={() => {
                    // Handle navigation for button 2
                }}
            />
            {/* EXERCISES */}
            <ButtonIcon
                size={30}
                defaultSvgPath={require('../../../assets/icons/exercices.svg')}
                pressedSvgPath={require('../../../assets/icons/exercices.svg')}
                onPress={() => {
                    // Handle navigation for button 3
                }}
            />
            {/* DICTIONARY */}
            <ButtonIcon
                size={30}
                defaultSvgPath={require('../../../assets/icons/dictionary.svg')}
                pressedSvgPath={require('../../../assets/icons/dictionary.svg')}
                onPress={() => {
                    // Handle navigation for button 4
                }}
            />
        </View>
    );
};

export default Footer;
