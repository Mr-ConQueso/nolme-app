import React from 'react';
import {Image, View} from 'react-native';
import AppTengwarText from "./theme/AppTengwarText";
import AppText from "./theme/AppText";
import icons from "../constants/Icons";
import Colors from "../constants/Colors";

export default function DictionaryEntry ({ transliteratedWord, translatedWord, wordType, pronunciationText, descriptionText, conceptualDevelopment}) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <AppTengwarText style={styles.translatedWord}>{translatedWord}</AppTengwarText>
                <AppText style={styles.transliteratedWord}>{transliteratedWord}</AppText>
                <Image
                    source={icons.speaker}
                    style={styles.image}
                />
            </View>

            <View style={styles.row}>
                <AppText style={[styles.wordType]}>{wordType}</AppText>
                <AppText style={styles.wordPronunciation}>{pronunciationText}</AppText>
            </View>

            <AppText style={styles.paragraph}>
                {descriptionText}
            </AppText>

            <ConceptualDevelopment conceptualDevelopment={conceptualDevelopment}/>
        </View>
    );
};

const ConceptualDevelopment = ({ conceptualDevelopment }) => {
    if (conceptualDevelopment === "") {
        return <></>
    }
    return (
        <AppText style={styles.paragraph}>
            {"\n"}
            <AppText style={styles.conceptualDevelopment}>
                {`Conceptual Development:  `}
            </AppText>
            {conceptualDevelopment}
        </AppText>
    );
};

const styles= ({
    container: {
        backgroundColor: Colors.dark.gray,
        padding: 20,
        borderRadius: 10,
        margin: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    translatedWord: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 10,
        fontFamily: "Tengwar"
    },
    transliteratedWord: {
        fontSize: 18,
        marginRight: 10,
    },
    image: {
        width: 25,
        height: 25,
    },
    wordPronunciation: {
        fontSize: 14,
        marginLeft: 5,
        fontStyle: "italic"
    },
    wordType: {
        fontSize: 14,
        borderWidth: 2,
        borderColor: Colors.dark.lightGray,
        marginHorizontal: 5,
        padding: 5,
        borderRadius: 5
    },
    paragraph: {
        fontSize: 16,
        marginTop: 10,
    },
    conceptualDevelopment: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
});