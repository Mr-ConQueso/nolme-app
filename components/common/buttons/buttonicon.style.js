import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    buttonContainer: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1,
        borderWidth: 1,
    },
    buttonImage: (dimension) => ({
        width: dimension,
        height: dimension,
    }),
});
