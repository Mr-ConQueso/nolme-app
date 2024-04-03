import React from 'react';
import {View} from 'react-native';
import ButtonIcon from '../buttons/ButtonIcon';
import styles from './footer.style';
import {icons} from "../../../constants";
import {Link} from "expo-router";

const Footer = () => {
    return (
        <View style={styles.container}>

            {/* HOME */}
            <Link href="/index" asChild >
                <ButtonIcon
                    size={30}
                    defaultIcon={icons.home}
                />
            </Link>

            {/* SCRIPT */}
            <Link href="/sindarin/learn-script" asChild >
                <ButtonIcon
                    size={30}
                    defaultIcon={icons.script}
                />
            </Link>

            {/* EXERCISES */}
            <Link href="/sindarin/exercises" asChild >
                <ButtonIcon
                    size={30}
                    defaultIcon={icons.exercises}
                />
            </Link>

            {/* DICTIONARY */}
            <Link href="/sindarin/dictionary" asChild >
                <ButtonIcon
                    size={30}
                    defaultIcon={icons.dictionary}
                />
            </Link>
        </View>
    );
};

export default Footer;
