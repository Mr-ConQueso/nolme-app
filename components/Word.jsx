import { View, Text, StyleSheet} from "react-native";

const Word = ({ word }) => (
    <View style={styles.root}>
        <View>
            <View style={styles.container2}>
                <Text style={styles.text}>{word}</Text>
            </View>
            <View style={styles.shadow} />
        </View>
    </View>
);


const styles= ({
    root: {
        padding: 4,
    },
    container2: {
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E6E8",
        backgroundColor: "white",
        height: 55 - 8,
    },
    text: {
        fontFamily: "Lato",
        fontSize: 19,
    },
    shadow: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 8,
        borderBottomWidth: 3,
        borderColor: "#E8E6E8",
        top: 4,
    },
});

export default Word;
