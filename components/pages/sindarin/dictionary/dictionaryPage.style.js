import { StyleSheet } from 'react-native';
import {COLORS} from "../../../../constants";
import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {responsiveWidth} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        alignSelf   : "center",
        padding: 16,
        width: clamp(400, responsiveWidth(100), 700),
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        marginRight: 8,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        backgroundColor: COLORS.gray,
        color: COLORS.lightGray,
        borderRadius: 5,
        padding: 8,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    itemContainer: {
        marginBottom: 8,
    },
    word: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    definition: {
        fontSize: 16,
    },
});

export default styles;
