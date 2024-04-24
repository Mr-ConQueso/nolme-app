import React from "react";
import {SafeAreaView, StyleSheet,} from "react-native";
import DictionaryList from "../../../components/dictionary/DictionaryList";
import Colors from "../../../constants/Colors";
import fakeData from "../../../data/dictionaries/elvish/word-dictionary.json";

export default function DictionaryScreen() {

  return (
      <SafeAreaView style={styles.container}>
        <DictionaryList
            data={fakeData}
        />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.dark.background
  }
});
