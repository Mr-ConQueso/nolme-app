import {Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Svg, {Path} from "react-native-svg";
import {useNavigation, useRoute} from "@react-navigation/native";
import WordList from "../../../../components/exercises/WordList";
import * as Progress from "react-native-progress";
import TalkingBallon from "../../../../components/exercises/TalkingBallon";
import ExerciseModal from "../../../../components/ExerciseModal";
import {useEffect, useState} from "react";
import Word from "../../../../components/exercises/Word";
import Colors from "../../../../constants/Colors";

const SindarinExercisePage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params;
  const [row, setRow] = useState(1);
  const [questions, setQuestions] = useState(data.questions["q" + row]);

  useEffect(() => {
    if (data && data.questions) {
      // Check if data and data.questions are not null or undefined
      setQuestions(data.questions["q" + row]);
    }
  }, [row, data]); // Add data to the dependency array

  // Add error handling for cases where questions is null
  if (!questions) {
    return (
        <View>
          <Text>Loading...</Text>
        </View>
    );
  }

  const checking = () => {
    if (Object.keys(questions).length - 1 > row) {
      setRow(row + 1);
    } else {
      navigation.goBack();
    }
  };

  const progressValue = () => {
    return row / (Object.keys(questions).length - 1);
  };

  const Cross = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Svg width={23} height={23} viewBox="0 0 14 14" fill="none">
            <Path
                d="M13 1L1 13M1 1l12 12"
                stroke="#AFAFAE"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
    );
  };

  const width = Dimensions.get("window").width - 16 * 4 - 24 - 35;

  return (
      <View style={styles.container}>
        <View>
          <View style={styles.row}>
            <Cross navigation={navigation} />

            <Progress.Bar
                progress={progressValue()}
                width={width - 50}
                height={(width * 11) / 135}
                color={"#58CC00"}
                fill={"#E4E4E4"}
                borderColor={"#E4E4E4"}
                animated={true}
                borderRadius={25}
            />

            <Text style={styles.heartText}>5</Text>
          </View>

          <Text style={styles.title}>Bu cümleyi çevir</Text>
          <View style={styles.questionCard}>
            <Image
                style={styles.image}
                source={require("../../../../assets/images/characters/character2.png")}
            />

            <TalkingBallon sentence={questions.question} />
          </View>
        </View>

        <WordList _words={questions.words}>
          {questions.words.map((word) => (
              <Word key={word.id} {...word} />
          ))}
        </WordList>

        <ExerciseModal correctAnswer={questions.answer} checking={checking} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    margin: 10,
  },
  row: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontFamily: "Lato_Bold",
    fontSize: 24,
    paddingLeft: 16,
  },
  image: {
    marginStart: 25,
    width: 100,
    height: 150,
  },
  questionCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  heartText: {
    fontSize: 18,
    color: Colors.dark.secondary,
    margin: 5,
    fontFamily: "Lato_Bold",
  },

  root: {
    padding: 4,
  },
  container2: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E6E8",
    backgroundColor: "white",
    height: 55 - 8,
  },
  text: {
    fontFamily: "Lato",
    fontSize: 19,
  },
  shadow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    borderBottomWidth: 3,
    borderColor: "#E8E6E8",
    top: 4,
  },
});

export default SindarinExercisePage;
