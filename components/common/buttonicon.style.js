import { StyleSheet } from 'react-native';
import {SIZES} from "../../constants";

export default StyleSheet.create({
    buttonContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonImage: (dimension) => ({
        width: dimension,
        height: dimension,
        //borderRadius: SIZES.small / 1.25,
    }),
});
