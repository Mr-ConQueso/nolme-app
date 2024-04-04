import {StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "../../../constants";
import {responsiveWidth} from "react-native-responsive-dimensions";
import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";

export default StyleSheet.create({
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
        color: COLORS.white,
        fontSize: 24,
        fontWeight: 'bold',
        fontFeatureSettings: '"liga" off'
    },
    pronunciationText: {
        color: COLORS.gray2,
        fontSize: 18,
    },
});