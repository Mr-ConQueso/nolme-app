import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './learnTengwarPage.style';
import TextButton from "../../../common/buttons/TextButton";
import TengwarScriptButton from "../../../common/buttons/TengwarScriptButton";
import AppText from "../../../common/AppText";
import AppH1 from "../../../common/AppH1";

const ConsonantButtonGrid = () => {

    const consonantsDictionary = {
        button1: { scriptIcon: 't', pronunciationText: "t" },
        button2: { scriptIcon: 'p', pronunciationText: "p" },
        button3: { scriptIcon: 'k', pronunciationText: "k" },
        button4: { scriptIcon: 'd', pronunciationText: "d" },
        button5: { scriptIcon: 'b', pronunciationText: "b" },
        button6: { scriptIcon: 'g', pronunciationText: "g" },
        button7: { scriptIcon: 'th', pronunciationText: "th" },
        button8: { scriptIcon: 'f', pronunciationText: "f/v" },
        button9: { scriptIcon: 'x', pronunciationText: "x" },
        button10: { scriptIcon: 'dh', pronunciationText: "dh" },
        button11: { scriptIcon: 'v', pronunciationText: "v" },
        button12: { scriptIcon: 'nk', pronunciationText: "nk" },
        button13: { scriptIcon: 'n', pronunciationText: "n" },
        button14: { scriptIcon: 'm', pronunciationText: "m" },
        button15: { scriptIcon: 'ng', pronunciationText: "n/ng" },
        button16: { scriptIcon: 'r', pronunciationText: "r" },
        button17: { scriptIcon: 'v', pronunciationText: "v" },
        button18: { scriptIcon: 'j', pronunciationText: "j" },
        button19: { scriptIcon: 'w', pronunciationText: "w" },
        button20: { scriptIcon: 'r', pronunciationText: "r" },
        button21: { scriptIcon: 'rh', pronunciationText: "rh" },
        button22: { scriptIcon: 'l', pronunciationText: "l" },
        button23: { scriptIcon: 'lh', pronunciationText: "lh" },
        button24: { scriptIcon: 's', pronunciationText: "s" },
        button25: { scriptIcon: 'z', pronunciationText: "ss" },
        button26: { scriptIcon: 'z', pronunciationText: "z" },
        button27: { scriptIcon: 'h', pronunciationText: "h" },
        button28: { scriptIcon: 'hw', pronunciationText: "hw" },
        button29: { scriptIcon: 'j', pronunciationText: "j" },
        button30: { scriptIcon: 'w', pronunciationText: "w" },
        button31: { scriptIcon: 'chw', pronunciationText: "chw" },
        button32: { scriptIcon: 'dw', pronunciationText: "dw" },
        button33: { scriptIcon: 'gw', pronunciationText: "gw" }
    };

    return (
        <ScrollView contentContainerStyle={styles.buttonGrid}>
            {Object.entries(consonantsDictionary).map(([key, value]) => (
                <TengwarScriptButton key={key} scriptIcon={value.scriptIcon} scriptPronunciation={value.pronunciationText} />
            ))}
        </ScrollView>
    );
};

const VowelButtonGrid = () => {

    const consonantsDictionary = {
        button1: { scriptIcon: 'Button 1', pronunciationText: "a" },
        button2: { scriptIcon: 'Button 2', pronunciationText: "e" },
        button3: { scriptIcon: 'Button 1', pronunciationText: "i" },
        button4: { scriptIcon: 'Button 2', pronunciationText: "o" },
        button5: { scriptIcon: 'Button 1', pronunciationText: "u" },
        button6: { scriptIcon: 'Button 2', pronunciationText: "y" },
        button7: { scriptIcon: 'Button 1', pronunciationText: "á/aa" },
        button8: { scriptIcon: 'Button 2', pronunciationText: "é/ee" },
        button9: { scriptIcon: 'Button 1', pronunciationText: "í/ii" },
        button10: { scriptIcon: 'Button 2', pronunciationText: "ó/oo" },
        button11: { scriptIcon: 'Button 1', pronunciationText: "ú/uu" },
        button12: { scriptIcon: 'Button 2', pronunciationText: "ý/yy" },
    };

    return (
        <ScrollView contentContainerStyle={styles.buttonGrid}>
            {Object.entries(consonantsDictionary).map(([key, value]) => (
                <TengwarScriptButton key={key} scriptIcon={value.scriptIcon} scriptPronunciation={value.pronunciationText} />
            ))}
        </ScrollView>
    );
};

const DiphthongButtonGrid = () => {

    const consonantsDictionary = {
        button1: { scriptIcon: 'Button 1', pronunciationText: "ae" },
        button2: { scriptIcon: 'Button 2', pronunciationText: "oe" },
        button3: { scriptIcon: 'Button 1', pronunciationText: "ai" },
        button4: { scriptIcon: 'Button 2', pronunciationText: "ei" },
        button5: { scriptIcon: 'Button 1', pronunciationText: "ui" },
        button6: { scriptIcon: 'Button 2', pronunciationText: "au/aw" },
    };

    return (
        <ScrollView contentContainerStyle={styles.buttonGrid}>
            {Object.entries(consonantsDictionary).map(([key, value]) => (
                <TengwarScriptButton key={key} scriptIcon={value.scriptIcon} scriptPronunciation={value.pronunciationText} />
            ))}
        </ScrollView>
    );
};

const SymbolButtonGrid = () => {

    const consonantsDictionary = {
        button1: { scriptIcon: 'Button 1', pronunciationText: "short carrier" },
        button2: { scriptIcon: 'Button 2', pronunciationText: "long carrier" },
        button3: { scriptIcon: 'Button 1', pronunciationText: "comma [,]" },
        button4: { scriptIcon: 'Button 2', pronunciationText: "period [.]" },
        button5: { scriptIcon: 'Button 1', pronunciationText: "exclamation [!]" },
        button6: { scriptIcon: 'Button 2', pronunciationText: "question mark [?]" },
    };

    return (
        <ScrollView contentContainerStyle={styles.buttonGrid}>
            {Object.entries(consonantsDictionary).map(([key, value]) => (
                <TengwarScriptButton key={key} scriptIcon={value.scriptIcon} scriptPronunciation={value.pronunciationText} />
            ))}
        </ScrollView>
    );
};

const LearnTengwarPage = () => {
    return (
        <ScrollView>
            <View style={styles.page}>
                <View style={styles.textContent}>

                    <AppH1 style={styles.heading}>
                        Let's learn Sindarin
                    </AppH1>
                    <AppText style={styles.paragraph}>
                        Get to know the Tengwar{'\n'}writing system
                    </AppText>

                    <TextButton text={"Learn the script"} style={styles.button} />

                </View>

                <ConsonantButtonGrid />

                <AppH1 style={styles.heading}>
                    Short and long vowels
                </AppH1>

                <VowelButtonGrid />

                <AppH1 style={styles.heading}>
                    Vowel diphthongs
                </AppH1>

                <DiphthongButtonGrid />

                <AppH1 style={styles.heading}>
                    Other symbols
                </AppH1>

                <SymbolButtonGrid />
            </View>
        </ScrollView>
    );
};

export default LearnTengwarPage;
