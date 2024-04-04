import { StyleSheet } from 'react-native';
import {COLORS, SIZES} from "../../../constants";

export default StyleSheet.create({
    pressableContainer: {
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: SIZES.paragraphSmall,
        fontWeight: 'bold',
    },
});
