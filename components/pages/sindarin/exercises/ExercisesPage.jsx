import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './exercisesPage.style';
import TextButton from "../../../common/buttons/TextButton";

const ExercisesPage = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.heading}>
                    Let's learn Sindarin
                </Text>
                <Text style={styles.paragraph}>
                    Get to know the Tengwar writing system
                </Text>

                <TextButton text={"Learn the script"} style={styles.button} />
            </View>
        </ScrollView>
    );
};

export default ExercisesPage;
