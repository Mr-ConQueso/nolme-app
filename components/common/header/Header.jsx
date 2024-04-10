import React from 'react';
import {View} from 'react-native';
import ButtonIcon from '../buttons/ButtonIcon';
import styles from './header.style';
import {icons} from "../../../constants";
import {Link} from "expo-router";
import FlagButton from "../buttons/FlagButton";

const Header = () => {
    return (
        <View style={styles.container}>
            {/* Language button */}
            <FlagButton
                size={30}
                defaultIcon={icons.sindarinFlag}
                style={{height: 20, width: 40}}
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
