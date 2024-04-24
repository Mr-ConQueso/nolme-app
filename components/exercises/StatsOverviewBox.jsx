import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {SIZES} from "../../constants/Theme";
import Colors from "../../constants/Colors";
import AppView from "../theme/AppView";
import AppH2 from "../theme/AppH2";
import AppH1 from "../theme/AppH1";
import {responsiveWidth} from "react-native-responsive-dimensions";

export default function StatsAchievementsBox({ icon, title, text }) {
    return (
        <AppView style={styles.achievementsBox}>

            {/* Fire icon and number */}
            <AppView style={styles.row}>
                <Image source={icon} style={styles.icon} />
                <AppH1 style={styles.numberText}>{title}</AppH1>
            </AppView>

            {/* Text */}
            <AppH2 style={styles.achievementText}>{text}</AppH2>
        </AppView>
    );
};

const styles = StyleSheet.create({
    achievementsBox: {
        borderColor: Colors.dark.gray,
        borderWidth: SIZES.defaultBorderWidth,
        width: responsiveWidth(45),
        padding: 20,
        margin: 5,
        borderRadius: SIZES.defaultRounding
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    numberText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    achievementText: {
        fontSize: 14,
    },
});
