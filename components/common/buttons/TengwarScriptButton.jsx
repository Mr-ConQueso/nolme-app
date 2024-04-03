import React from 'react';
import {Text, View} from 'react-native';
import styles from './tengwarScriptButton.style';

const TengwarScriptButton = ({ scriptIcon, scriptPronunciation, progress }) => {

    return (
        <View style={styles.button}>
            <View style={styles.textContainer}>
                <Text style={styles.scriptText}>{scriptIcon}</Text>
                <Text style={styles.pronunciationText}>{scriptPronunciation}</Text>
            </View>
            <View style={styles.progressBarContainer}>
                {/* <ProgressBar progress={progress} width={null} color="#FFFFFF" /> */}
            </View>
        </View>
    );
};

export default TengwarScriptButton;
