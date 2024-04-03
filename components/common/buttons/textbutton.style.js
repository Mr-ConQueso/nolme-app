import { StyleSheet } from 'react-native';
import {COLORS} from "../../../constants";

export default StyleSheet.create({
    pressableContainer: {
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
