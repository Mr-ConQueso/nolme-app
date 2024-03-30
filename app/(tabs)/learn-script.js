import React from 'react';
import {View} from 'react-native';
import LearnScriptPage from "../../components/home/learn_script/LearnScriptPage";

export default function CenteredPage() {
    return (
        <View style={styles.container}>
            <LearnScriptPage />
        </View>
    );
};
