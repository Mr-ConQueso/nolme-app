import React from 'react';
import {View} from 'react-native';
import ButtonIcon from '../ButtonIcon';
import styles from './footer.style';
import {icons} from "../../../constants";
import {Link} from "expo-router";

const Footer = () => {
    return (
        <View style={styles.container}>
            {/* HOME */}
            <Link href="/home" asChild >
                <ButtonIcon
                    size={30}
                    defaultIcon={icons.home}
                    pressedIcon={icons.home}
                    onPress={() => {
                    }}
                />
            </Link>
            {/* SCRIPT */}
            <Link href="/learn-script" asChild >
                <ButtonIcon
                    size={30}
                    defaultIcon={icons.script}
                    pressedIcon={icons.script}
                    onPress={() => {
                        // Handle navigation for button 2
                    }}
                />
            </Link>
            {/* EXERCISES */}
            <ButtonIcon
                size={30}
                defaultIcon={icons.exercises}
                pressedIcon={icons.exercises}
                onPress={() => {
                    // Handle navigation for button 3
                }}
            />
            {/* DICTIONARY */}
            <ButtonIcon
                size={30}
                defaultIcon={icons.dictionary}
                pressedIcon={icons.dictionary}
                onPress={() => {
                    // Handle navigation for button 4
                }}
            />
        </View>
    );
};

export default Footer;
