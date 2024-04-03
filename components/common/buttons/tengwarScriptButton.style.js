import {StyleSheet} from "react-native";
import {COLORS, SIZES, FONT} from "../../../constants";
import {responsiveWidth} from "react-native-responsive-dimensions";
import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {useFonts} from "expo-font";

export default StyleSheet.create({
    button: {
        width: clamp(90, responsiveWidth(22), 90),
        height: clamp(90, responsiveWidth(22), 90),
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
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    scriptText: {
        fontFamily: FONT.tengwar,
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    pronunciationText: {
        color: COLORS.gray2,
        fontSize: 14,
    },
});