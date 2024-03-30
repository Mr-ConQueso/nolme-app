import React from 'react';
import {Text, View} from 'react-native';
import styles from './learnScriptPage.style';
import TextButton from "../../common/TextButton";

const LearnScriptPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.heading}>
                    Let's learn Sindarin
                </Text>
                <Text style={styles.paragraph}>
                    Get to know the Tengwar writing system
                </Text>

                <TextButton text={"Learn the script"} style={styles.button} />
            </View>
        </View>
    );
};

export default LearnScriptPage;
