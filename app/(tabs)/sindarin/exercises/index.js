import React from 'react';
import {Pressable, ScrollView, StyleSheet} from 'react-native';
import Colors from "../../../../constants/Colors";
import AppView from "../../../../components/theme/AppView";
import AppH1 from "../../../../components/theme/AppH1";
import {SIZES} from "../../../../constants/Theme";
import {Link} from "expo-router";
import NavBar from "../../../../components/NavBar";
import AppSafeAreaView from "../../../../components/theme/AppSafeAreaView";

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
      <AppSafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={[styles.body]}>
              
              <AppView style={styles.container}>
                  <AppH1 style={styles.heading}>Learning Exercises</AppH1>
                  <Link href="exercises/mistakes"><ExerciseButton title="Mistakes" /></Link>
                  <Link href="exercises/words"><ExerciseButton title="Words" /></Link>

                  <Link href="exercises/stories"><ExerciseButton title="Stories" /></Link>

                  <Link href="exercises/poems"><ExerciseButton title="Poems" /></Link>

                  <AppH1 style={styles.heading}>Conversation</AppH1>
                  <Link href="exercises/speak"><ExerciseButton title="Speak" /></Link>
                  <Link href="exercises/listen"><ExerciseButton title="Listen" /></Link>
              </AppView>
              
          </ScrollView>
          <NavBar />
      </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background,
        flex: 1,
    },
    body: {
        width: SIZES.defaultContentWidth,
        paddingTop: 30,
        alignSelf: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: "flex-start",
        color: Colors.dark.tertiary,
    },
    button: {
        width: '100%',
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
