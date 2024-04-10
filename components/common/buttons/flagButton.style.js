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
        height: dimension,
        width: dimension * 2,
        //aspectRatio: 1/2,
    }),
});
