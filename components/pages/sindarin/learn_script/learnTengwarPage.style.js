import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 20,
    },
    textContent: {
        alignItems: 'center',
        paddingTop: '30px',
    },
    heading: {
        marginBottom: 10,
        marginTop: 10,
    },
    paragraph: {
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: '25px',
    },
});
