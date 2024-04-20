import React from 'react';
import {Text} from 'react-native';
import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {responsiveWidth} from "react-native-responsive-dimensions";
import {SIZES} from "../../constants/Theme";
import Colors from "../../constants/Colors";
import AppView from "../theme/AppView";

export default function TengwarScriptButton ({ scriptIcon, scriptPronunciation, progress }) {

    return (
        <AppView style={styles.button}>
            <AppView style={styles.textContainer}>
                <Text style={styles.scriptText}>{scriptIcon}</Text>
                <Text style={styles.pronunciationText}>{scriptPronunciation}</Text>
            </AppView>
            <AppView style={styles.progressBarContainer}>
                {/* <ProgressBar progress={progress} width={null} color="#FFFFFF" /> */}
            </AppView>
        </AppView>
    );
};

const styles= ({
    button: {
        width: clamp(1, responsiveWidth(20), 90),
        height: clamp(1, responsiveWidth(20), 90),
        borderRadius: 15,
        backgroundColor: Colors.dark.gray,
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
        fontFamily: "Tengwar",
        color: Colors.dark.text,
        fontSize: 24,
        fontWeight: 'bold',
    },
    pronunciationText: {
        color: Colors.dark.lightGray,
        fontSize: 18,
    },
});