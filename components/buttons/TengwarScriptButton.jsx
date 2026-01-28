import React from 'react';
import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {responsiveWidth} from "react-native-responsive-dimensions";
import {FONTS, SIZES} from "../../constants/Theme";
import Colors from "../../constants/Colors";
import AppView from "../theme/AppView";
import AppTengwarText from "../theme/AppTengwarText";
import AppText from "../theme/AppText";

export default function TengwarScriptButton ({ scriptIcon, scriptPronunciation, progress }) {

    return (
        <AppView style={styles.button}>
            <AppView style={styles.textContainer}>
                <AppTengwarText style={styles.scriptText}>{scriptIcon}</AppTengwarText>
                <AppText style={styles.pronunciationText}>{scriptPronunciation}</AppText>
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
        color: Colors.dark.text,
        fontSize: 24,
        fontWeight: 'bold',
    },
    pronunciationText: {
        color: Colors.dark.lightGray,
        marginTop: 12,
        fontSize: 18,
    },
});