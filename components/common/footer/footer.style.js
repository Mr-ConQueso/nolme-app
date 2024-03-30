import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../../constants";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
    },
});
