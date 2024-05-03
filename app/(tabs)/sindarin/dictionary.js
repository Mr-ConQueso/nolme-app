import React from "react";
import {StyleSheet,} from "react-native";
import DictionaryList from "../../../components/dictionary/DictionaryList_Sindarin";
import Colors from "../../../constants/Colors";
import sindarinDictionary from "../../../data/dictionaries/elvish/word-dictionary.json";
import AppSafeAreaView from "../../../components/theme/AppSafeAreaView";

export default function DictionaryScreen() {

  return (
      <AppSafeAreaView style={styles.container}>
        <DictionaryList
            data={sindarinDictionary}
        />
      </AppSafeAreaView>
  );
};

const styles= StyleSheet.create({
  container: {
      backgroundColor: Colors.dark.background,
      flex: 1
  }
});
