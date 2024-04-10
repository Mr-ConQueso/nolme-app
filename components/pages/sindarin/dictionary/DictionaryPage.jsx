import React, {useState} from 'react';
import {ScrollView, Switch, TextInput, View} from 'react-native';
import styles from './dictionaryPage.style';
import TextButton from "../../../common/buttons/TextButton";
import DictionaryEntry from "./DictionaryEntry";
import xmlParser from 'xml-js';
import xmlData from '../../../../dictionaries/eldamo-data.xml';

const DictionaryPage = () => {
    const [searchText, setSearchText] = useState('');
    const [isEnglishToOther, setIsEnglishToOther] = useState(true);
    const [searchResults, setSearchResults] = useState([]);

    // Function to search for entries based on the search term
    const handleSearch = () => {
        const results = []; // Array to store search results

        // Perform search logic here based on the searchText and isEnglishToOther state
        // Add matching entries to the results array

        setSearchResults(results); // Update searchResults state with the search results
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Enter search term"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    <TextButton
                        text="Search"
                        onPress={handleSearch}
                    />
                    <View style={styles.switchContainer}>
                        <Switch
                            value={isEnglishToOther}
                            onValueChange={setIsEnglishToOther}
                        />
                    </View>
                </View>

                {/* Display search results */}
                {searchResults.map((entry, index) => (
                    <DictionaryEntry
                        key={index}
                        transliteratedWord={entry.transliteratedWord}
                        translatedWord={entry.translatedWord}
                        wordType={entry.wordType}
                        pronunciationText={entry.pronunciationText}
                        descriptionText={entry.descriptionText}
                        conceptualDevelopment={entry.conceptualDevelopment}
                    />
                ))}

                {/*
                <DictionaryEntry
                    transliteratedWord="Ered Lithui"
                    translatedWord=" "
                    wordType="topon"
                    pronunciationText="ered-lithui"
                    descriptionText={`From orod mountain + lithui ashen, ashy, of ash / ash[en]\n\nThe “Ashen Mountains” north of Mordor (LotR/636). This name is a combination of the plural of orod “mountain” and lithui “ashen” (SA/lith, RC/765).`}
                    conceptualDevelopment="  In Lord of the Rings drafts from the 1940s, this name first appeared as N. Eredlithui (TI/344)."
                    />
                    */}
            </View>
        </ScrollView>
    );
};

export default DictionaryPage;
