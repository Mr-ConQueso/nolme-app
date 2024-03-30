import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../../../constants";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 60,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },
});
