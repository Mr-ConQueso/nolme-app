import React from 'react';
import {SIZES} from "../../constants/Theme";
import Colors from "../../constants/Colors";
import AppView from "../theme/AppView";
import {Image} from "react-native";
import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {responsiveWidth} from "react-native-responsive-dimensions";

export default function StatsAchievementsBox ({ achievementIcon }) {

    return (
        <AppView style={styles.achievementsBox}>
            <Image source={achievementIcon} style={styles.icon} />
        </AppView>
    );
};

const styles= ({
    achievementsBox: {
        paddingHorizontal: clamp(40, responsiveWidth(5), 300),
        paddingVertical: clamp(40, responsiveWidth(5), 300) * 1.5,
        borderColor: Colors.dark.gray,
        borderWidth: SIZES.defaultBorderWidth,
        margin: 5,
        borderRadius: SIZES.defaultRounding
    },
    icon: {
        width: 20,
        height: 20,
    },
});