import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {COLORS, FONT} from "../../../../constants";
import AppTengwarText from "../../../common/AppTengwarText";
import AppText from "../../../common/AppText";
import icons from "../../../../constants/icons";

const DictionaryEntry = ({ transliteratedWord, translatedWord, wordType, pronunciationText, descriptionText, conceptualDevelopment}) => {
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray,
        padding: 20,
        borderRadius: 10,
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
        fontFamily: FONT.tengwar
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
        borderColor: COLORS.lightGray,
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

export default DictionaryEntry;
