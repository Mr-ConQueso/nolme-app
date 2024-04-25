import React from "react";
import {Keyboard, StyleSheet, TextInput, View} from "react-native";
import {Entypo, Feather} from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import TextButton from "../buttons/TextButton";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
    return (
        <View style={styles.container}>
            <View
                style={
                    clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >
                {/* search Icon */}
                <Feather
                    name="search"
                    size={20}
                    color={Colors.dark.lightGray}
                    style={{ marginLeft: 1 }}
                />
                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (
                    <Entypo name="cross" size={20} color={Colors.dark.lightGray} style={{ padding: 1 }} onPress={() => {
                        setSearchPhrase("")
                    }}/>
                )}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View>
                    <TextButton
                        title="Cancel"
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                        }}
                    ></TextButton>
                </View>
            )}
        </View>
    );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "70%",

    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: Colors.dark.gray,
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: Colors.dark.gray,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        color: Colors.dark.text,
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
});