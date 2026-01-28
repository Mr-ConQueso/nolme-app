import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; // Import Image component
import { SIZES } from "../../constants/Theme";
import Colors from "../../constants/Colors";
import AppView from "../theme/AppView";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { FontAwesome } from '@expo/vector-icons';
import AppH1 from "../theme/AppH1";
import AppH2 from "../theme/AppH2"; // Import FontAwesome component for circle icon

export default function StatsProgressBox({ achievementIcon }) {

    return (
        <AppView style={styles.achievementsBox}>
            {/* This Week row */}
            <AppView style={styles.row}>
                <AppView style={styles.leftRow}>
                    <FontAwesome name="circle" size={12} color={Colors.dark.tertiary} style={styles.icon} />
                    <AppH1 style={styles.currentWeekText}>This Week</AppH1>
                </AppView>
                <AppView style={styles.rightRow}>
                    <AppH2 style={styles.currentWeekText}>1096 XP</AppH2>
                </AppView>
            </AppView>
            {/* Last Week row */}
            <AppView style={styles.row}>
                <AppView style={styles.leftRow}>
                    <FontAwesome name="circle" size={12} color={Colors.dark.subtitle} style={styles.icon} />
                    <AppH1 style={styles.lastWeekText}>Last Week</AppH1>
                </AppView>
                <AppView style={styles.rightRow}>
                    <AppH2 style={styles.lastWeekText}>0 XP</AppH2>
                </AppView>
            </AppView>
        </AppView>
    );
};

const styles = StyleSheet.create({
    achievementsBox: {
        width: '100%',
        borderColor: Colors.dark.gray,
        borderWidth: SIZES.defaultBorderWidth,
        padding: 30,
        margin: 5,
        borderRadius: SIZES.defaultRounding,
        marginBottom: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    leftRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    currentWeekText: {
        fontSize: 16,
        color: Colors.dark.tertiary,
    },
    lastWeekText: {
        fontSize: 16,
        color: Colors.dark.subtitle,
    },
});
