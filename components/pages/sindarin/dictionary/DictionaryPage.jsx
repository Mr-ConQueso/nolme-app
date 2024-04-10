import React, {useState} from 'react';
import {ScrollView, Switch, TextInput, View} from 'react-native';
import styles from './dictionaryPage.style';
import TextButton from "../../../common/buttons/TextButton";
import DictionaryEntry from "./DictionaryEntry";

const DictionaryPage = () => {
    const [searchText, setSearchText] = useState('');
    const [isEnglishToOther, setIsEnglishToOther] = useState(true);

    const handleSearch = () => {
        console.log('Searching for:', searchText);
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

                <DictionaryEntry
                    transliteratedWord="Ered Lithui"
                    translatedWord=" "
                    wordType="topon"
                    pronunciationText="ered-lithui"
                    descriptionText={`From orod mountain + lithui ashen, ashy, of ash / ash[en]\n\nThe “Ashen Mountains” north of Mordor (LotR/636). This name is a combination of the plural of orod “mountain” and lithui “ashen” (SA/lith, RC/765).`}
                    conceptualDevelopment="  In Lord of the Rings drafts from the 1940s, this name first appeared as N. Eredlithui (TI/344)."
                    />
            </View>
        </ScrollView>
    );
};

export default DictionaryPage;
