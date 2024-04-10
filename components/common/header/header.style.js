import {StyleSheet} from 'react-native';
import {COLORS} from "../../../constants";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        borderBottomWidth: 3,
        borderBottomColor: COLORS.gray,
        paddingTop: 10,
        paddingBottom: 10
    },
});
