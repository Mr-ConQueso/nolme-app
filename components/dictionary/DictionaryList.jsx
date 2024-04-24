import React, { useState } from "react";
import {FlatList, SafeAreaView, StyleSheet, Button, Platform} from "react-native";
import AppView from "../theme/AppView";
import Colors from "../../constants/Colors";
import DictionaryEntry from "./DictionaryEntry";
import {SIZES} from "../../constants/Theme";
import AppH1 from "../theme/AppH1";
import SearchBar from "./SearchBar";
import {responsiveWidth} from "react-native-responsive-dimensions";
import TextButton from "../buttons/TextButton";

const PAGE_SIZE = 12;

// Define custom word type order
const wordTypeOrder = {
    "pronoun": 1,
    "noun": 2,
    "verb": 3,
    "adjective": 4,
    "adverb": 5,
    "preposition": 6,
    "conjugation": 7,
    "interjection": 8,
    "particle": 9,
    "prefix": 10,
    "suffix": 11,
    "proper-name": 12,
    "place-name": 13,
    "family-name": 14,
    "collective-noun": 15,
    "collective-name": 16,
    "ordinal": 17,
    "cardinal": 18,
    "fraction": 19,
    "article": 20,
    "phoneme": 21,
    "phonetic-rule": 22,
    "grammar": 23,
    "text": 24,
    "affix": 25,
    "masc-name": 26,
    "fem-name": 27,
    "phrase": 28,
    "root": 29
};

const List = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);

    // Filter data based on search phrase
    const filteredData = data.filter((item) => {
        if (
            searchPhrase === "" ||
            (item.englishWord &&
                item.englishWord
                    .toUpperCase()
                    .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) ||
            (item.descriptionText &&
                item.descriptionText
                    .toUpperCase()
                    .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, "")))
        ) {
            return true;
        }
        return false;
    });

    // Sort filtered data based on custom word type order if search phrase is not empty
    const sortedData = searchPhrase !== "" ? [...filteredData].sort((a, b) => {
        const orderA = wordTypeOrder[a.wordType] || Infinity;
        const orderB = wordTypeOrder[b.wordType] || Infinity;
        return orderA - orderB;
    }) : filteredData;

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const PageNavigationButtons = () => {
        return (
            <AppView style={styles.pageNavigation}>
                <TextButton title="Previous Page" onPress={prevPage} disabled={currentPage === 0} />
                <TextButton
                    title="Next Page"
                    onPress={nextPage}
                    disabled={currentPage * PAGE_SIZE + PAGE_SIZE >= sortedData.length}
                />
            </AppView>
        );
    }

    const renderPage = () => {
        const startIndex = currentPage * PAGE_SIZE;
        const endIndex = Math.min(startIndex + PAGE_SIZE, sortedData.length);
        const pageData = sortedData.slice(startIndex, endIndex);

        return (
            <FlatList
                data={pageData}
                renderItem={({ item }) => (
                    <DictionaryEntry
                        translatedWord={item.translatedWord}
                        transliteratedWord={item.transliteratedWord}
                        wordType={item.wordType}
                        pronunciationText={item.pronunciationText}
                        descriptionText={item.descriptionText}
                        conceptualDevelopment={item.conceptualDevelopment}
                    />
                )}
                keyExtractor={(item) => item.id}
                ListFooterComponent={() => (
                    <PageNavigationButtons/>
                )}
            />
        );
    };

    return (
        <SafeAreaView style={styles.list__container}>
            <AppView style={styles.header}>
                {/*!clicked && <AppH1 style={styles.title}>Programming Languages</AppH1>*/}
                <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                />
                <PageNavigationButtons/>
            </AppView>
            <AppView
                onStartShouldSetResponder={() => {
                    setClicked(false);
                }}
            >
                {renderPage()}
            </AppView>
        </SafeAreaView>
    );
};

export default List;

const styles = StyleSheet.create({
    list__container: {
        margin: 10,
        height: "85%",
        width: "100%",
    },
    pageNavigation: {
        width: SIZES.defaultContentWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        paddingBottom: 15,
    },
    header: {
        paddingTop: Platform.OS === "android" ? 10 : 0,
        width: responsiveWidth(100),
        backgroundColor: Colors.dark.tertiary,
        alignItems: "center"
    }
});
