import React from 'react';
import {SIZES} from "../../constants/Theme";
import Colors from "../../constants/Colors";
import AppView from "../theme/AppView";
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {Image} from "react-native";

export default function StatsAchievementsBox ({ achievementIcon }) {

    return (
        <AppView style={styles.achievementsBox}>
            <Image source={achievementIcon} style={styles.icon} />
        </AppView>
    );
};

const styles= ({
    achievementsBox: {
        paddingHorizontal: responsiveWidth(10),
        paddingVertical: responsiveHeight(6),
        borderColor: Colors.dark.gray,
        borderWidth: SIZES.defaultBorderWidth,
        padding: 30,
        margin: 5,
        borderRadius: SIZES.defaultRounding
    },
    icon: {
        width: 20,
        height: 20,
    },
});