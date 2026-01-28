import React from "react";
import {StyleSheet,} from "react-native";
import DictionaryList from "../../../components/dictionary/DictionaryList_Sindarin";
import Colors from "../../../constants/Colors";
import blackSpeechDictionary from "../../../data/dictionaries/black-speech/Orcish-English-Russian.json";
import AppSafeAreaView from "../../../components/theme/AppSafeAreaView";

export default function DictionaryScreen() {

  return (
      <AppSafeAreaView style={styles.container}>
        <DictionaryList
            data={blackSpeechDictionary}
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
