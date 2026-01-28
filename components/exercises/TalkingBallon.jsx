import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SpeakerWaveIcon } from "react-native-heroicons/solid";

const TalkingBallon = ({ sentence }) => {
    let x = wordShredding(sentence);
    function wordShredding(text) {
        const sentences = text.split(" ");
        return sentences;
    }

    return (
        <View style={styles.dialog}>
            <View style={styles.leftPoint}>
                <View style={styles.innerLeftPoint}></View>
            </View>

            <Text>
                <SpeakerWaveIcon fill="#1cb0f6" color="#1cb0f6" size={22} />
                {x.map((item, index) => (
                    <Text key={index}>
                        <Text> </Text>
                        <TouchableOpacity>
                            <Text style={styles.text}>{item}</Text>
                        </TouchableOpacity>
                    </Text>
                ))}
            </Text>
        </View>
    );
};

const styles= ({
    dialog: {
        width: "40%",
        //height: "70%",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 15,
        borderWidth: 1,
        margin: 10,
    },

    leftPoint: {
        width: 0,
        height: 0,
        borderLeftWidth: 20,
        borderRightWidth: 1,
        borderBottomWidth: 20,
        borderStyle: "solid",
        borderRadius: 5,
        backgroundColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "black",
        position: "absolute",
        top: "50%",
        left: "-15%",
        alignItems: "center",
        justifyContent: "center",
    },
    innerLeftPoint: {
        width: 0,
        height: 0,
        borderLeftWidth: 17.5,
        borderRightWidth: 1,
        borderBottomWidth: 17.5,
        borderStyle: "solid",
        borderRadius: 5,
        backgroundColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "white",
        top: 10.2,
        left: -8,
    },

    text: {
        fontSize: 18,
        textDecorationStyle: "dotted",
        textDecorationLine: "underline",
        letterSpacing: 0.5,
        justifyContent: "space-around",
        textAlign: "center",
        lineHeight: 30,
    },
});


export default TalkingBallon;
