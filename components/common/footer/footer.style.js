import {StyleSheet} from 'react-native';
import {COLORS} from "../../../constants";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        borderTopWidth: 3,
        borderTopColor: COLORS.gray,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20
    },
});
