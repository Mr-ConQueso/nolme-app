import {Platform, SafeAreaView, StyleSheet, Switch, TextInput} from 'react-native';
import DictionaryEntry from "../../components/DictionaryEntry";
import {useState} from "react";
import TextButton from "../../components/buttons/TextButton";
import Colors from "../../constants/Colors";
import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import AppView from "../../components/theme/AppView";
import eldamoDictionary from "../../data/dictionaries/testDict.json";
import {SIZES} from "../../constants/Theme";

const SearchResults = ({ results }) => {
  return (
      <AppView>
        {results.map((result, index) => (
            <DictionaryEntry
                key={index}
                transliteratedWord={result.word}
                translatedWord={result.word}
                wordType={result.attributes.speech}
                pronunciationText={result.attributes.gloss}
                descriptionText={result.attributes.notes ? result.attributes.notes : ''}
                conceptualDevelopment=""
            />
        ))}
      </AppView>
  );
};

export default function DictionaryScreen() {
  const [searchText, setSearchText] = useState('');
  const [isEnglishToOther, setIsEnglishToOther] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = eldamoDictionary.filter(entry =>
        entry.word.attributes.gloss.includes(searchText)
    );
    setSearchResults(filteredResults);
  };

  return (
      <SafeAreaView style={styles.container}>
        <AppView style={styles.header}>
          <AppView style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Enter search term"
                value={searchText}
                onChangeText={setSearchText}
            />
            <TextButton style={styles.button} title="Search" onPress={handleSearch} />
            <AppView style={styles.switchContainer}>
              <Switch value={isEnglishToOther} onValueChange={setIsEnglishToOther} />
            </AppView>
          </AppView>
        </AppView>

        <DictionaryEntry
            key="1"
            transliteratedWord="TEST"
            translatedWord=""
            wordType="WORD"
            pronunciationText="[ PRONUNCIATION ]"
            descriptionText="The following is a test for a description test, this test is needed to be this long"
            conceptualDevelopment=""
        />

        <SearchResults results={searchResults}/>

        {/* Display search results */}
        {searchResults.length > 0 &&
            <SearchResults results={searchResults}/>
        }
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  header: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
    width: responsiveWidth(100),
    backgroundColor: Colors.dark.tertiary,
    alignItems: "center",
  },
  searchContainer: {
    width: SIZES.defaultContentWidth,
    backgroundColor: Colors.dark.tertiary,
    flexDirection: 'row',
    marginBottom: 8,
    paddingHorizontal: clamp(12, responsiveWidth(2), 200),
    paddingVertical: responsiveHeight(3),
  },
  searchInput: {
    fontFamily: "Lato",
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: Colors.dark.lightGray,
    backgroundColor: Colors.dark.gray,
    color: Colors.dark.lightGray,
    borderRadius: 5,
    padding: 8,
  },
  button: {
    backgroundColor: Colors.dark.secondary,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 6
  },
  itemContainer: {
    marginBottom: 8,
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  definition: {
    fontSize: 16,
  },
});
