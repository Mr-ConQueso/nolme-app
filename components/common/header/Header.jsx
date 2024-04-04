import React from 'react';
import {Pressable, Text, View} from 'react-native';
import ButtonIcon from '../buttons/ButtonIcon';
import styles from './header.style';
import {icons} from "../../../constants";
import {Link} from "expo-router";

const Header = () => {
    return (
        <View style={styles.container}>
            {/* Language button */}
            <ButtonIcon
                size={30}
                defaultIcon={icons.sindarinFlag}
            />
            {/* Settings button */}
            <Link href="/settings" asChild>
                <ButtonIcon
                    size={30}
                    defaultIcon={icons.settings}
                />
            </Link>

        </View>
    );
};

export default Header;
