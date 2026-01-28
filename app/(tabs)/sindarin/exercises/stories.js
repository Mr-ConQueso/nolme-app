import React from 'react';
import {Platform, Pressable, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Colors from "../../../../constants/Colors";
import AppView from "../../../../components/theme/AppView";
import AppH1 from "../../../../components/theme/AppH1";
import {SIZES} from "../../../../constants/Theme";

const ExerciseButton = ({title, onTap, style}) => {
  return (
      <Pressable
          onPress={onTap}
          style={({ pressed }) => [
            {
              opacity: pressed
                  ? 0.2
                  : 1,
            },
            styles.button,
            style
          ]}>
        <AppH1 style={styles.buttonText}>{title}</AppH1>
      </Pressable>
  );
}

export default function ExercisesScreen() {
  return (
      <SafeAreaView style={styles.backgroundContainer}>
          <ScrollView contentContainerStyle={[styles.content]}>
              
              <AppView style={styles.backgroundContainer}>
                  <AppH1 style={styles.heading}>Develop your {"\n"}conversational skills</AppH1>

                  <ExerciseButton title="Start" />
              </AppView>
              
          </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
    content: {
        paddingTop: Platform.OS === "android" ? 60 : 40,
        alignSelf: "center",
        width: SIZES.defaultContentWidth,
    },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  button: {
    padding: 20,
    borderColor: Colors.dark.gray,
    borderWidth: SIZES.defaultBorderWidth,
    borderRadius: SIZES.defaultRounding,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  buttonText: {
    color: Colors.dark.text,
    fontSize: SIZES.paragraphSmall,
    fontWeight: 'bold',
  },
});
