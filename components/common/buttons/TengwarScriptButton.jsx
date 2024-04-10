import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {responsiveWidth} from "react-native-responsive-dimensions";
import {COLORS, FONT, SIZES} from "../../../constants";

const TengwarScriptButton = ({ scriptIcon, scriptPronunciation, progress }) => {

    return (
        <View style={styles.button}>
            <View style={styles.textContainer}>
                <Text style={styles.scriptText}>{scriptIcon}</Text>
                <Text style={styles.pronunciationText}>{scriptPronunciation}</Text>
            </View>
            <View style={styles.progressBarContainer}>
                {/* <ProgressBar progress={progress} width={null} color="#FFFFFF" /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: clamp(1, responsiveWidth(22), 90),
        height: clamp(1, responsiveWidth(22), 90),
        borderRadius: 15,
        backgroundColor: COLORS.gray,
        justifyContent: 'center',
        alignItems: 'center',
        margin: clamp(1, responsiveWidth(1), 5),
    },
    progressBarContainer: {
        position: 'absolute',
        borderRadius: SIZES.defaultRounding,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    scriptText: {
        fontFamily: FONT.tengwar,
        color: COLORS.text,
        fontSize: 24,
        fontWeight: 'bold',
        fontFeatureSettings: '"liga" off'
    },
    pronunciationText: {
        color: COLORS.lightGray,
        fontSize: 18,
    },
});

export default TengwarScriptButton;