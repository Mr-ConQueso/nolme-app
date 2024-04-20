import {Image, TouchableOpacity, View} from "react-native";
import React from "react";
import {AnimatedCircularProgress} from "react-native-circular-progress";
import {useNavigation} from "@react-navigation/native";
import Colors from "../constants/Colors";
import AppH1 from "./theme/AppH1";

const Exercises = ({ exercise }) => {
    const navigation = useNavigation();
    const url =
        "https://raw.githubusercontent.com/abdulkadir-erdeger/duolingo-clone/master/assets/Icons/" +
        exercise.definition.picture;

    return (
        exercise && (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("ExercisePage", (exercise = exercise))
                }
                style={styles.innerButton}
            >
                <AnimatedCircularProgress
                    size={120}
                    width={10}
                    fill={exercise.definition.levels}
                    rotation={135}
                    tintColor={Colors.dark.gray}
                    backgroundColor={Colors.dark.tertiary}
                >
                    {() => (
                        <View
                            style={{
                                ...styles.innerCircle,
                                backgroundColor: Colors.dark.gray,
                            }}
                        >
                            <Image
                                style={styles.innerLogo}
                                source={{
                                    uri: url,
                                }}
                                resizeMode="cover"
                            />
                        </View>
                    )}
                </AnimatedCircularProgress>
                <AppH1 style={styles.innerText}>{exercise.definition.name}</AppH1>
            </TouchableOpacity>
        )
    );
};

const styles = ({
    innerCircle: {
        opacity: 0.8,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        height: 120 * 0.75, // 90px
        width: 120 * 0.75, // 90px
    },
    innerLogo: {
        width: 50,
        height: 50,
    },
    innerButton: {
        alignItems: "center",
        margin: 5,
    },
    innerText: {
        fontSize: 18,
        marginTop: 5
    },
    body: {
        flex: 1,
        padding: 20,
    },
    unitLogo: {
        height: 120,
        width: 200,
        marginBottom: 15,
    },
});

export default Exercises;
