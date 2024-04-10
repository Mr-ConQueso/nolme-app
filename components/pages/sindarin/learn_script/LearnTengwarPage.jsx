import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './learnTengwarPage.style';
import TextButton from "../../../common/buttons/TextButton";
import AppText from "../../../common/AppText";
import AppH1 from "../../../common/AppH1";
import TengwarScriptButton from "../../../common/buttons/TengwarScriptButton";

const ConsonantButtonGrid = () => {

    const consonantsDictionary = {
        button1: { scriptIcon: '', pronunciationText: "t" },
        button2: { scriptIcon: '', pronunciationText: "th" },
        button3: { scriptIcon: '', pronunciationText: "p" },
        button4: { scriptIcon: '', pronunciationText: "c" },
        button5: { scriptIcon: '', pronunciationText: "ch" },
        button6: { scriptIcon: '', pronunciationText: "d" },
        button7: { scriptIcon: '', pronunciationText: "dh" },
        button8: { scriptIcon: '', pronunciationText: "b" },
        button9: { scriptIcon: '', pronunciationText: "g" },
        button10: { scriptIcon: '', pronunciationText: "v" },
        button11: { scriptIcon: '', pronunciationText: "f" },
        button12: { scriptIcon: '', pronunciationText: "n" },
        button13: { scriptIcon: '', pronunciationText: "ng" },
        button14: { scriptIcon: '', pronunciationText: "m" },
        button15: { scriptIcon: '', pronunciationText: "j" },
        button16: { scriptIcon: '', pronunciationText: "w" },
        button17: { scriptIcon: '', pronunciationText: "r" },
        button18: { scriptIcon: '', pronunciationText: "rh" },
        button19: { scriptIcon: '', pronunciationText: "-r" },
        button20: { scriptIcon: '', pronunciationText: "L" },
        button21: { scriptIcon: '', pronunciationText: "Lh" },
        button22: { scriptIcon: '  ', pronunciationText: "s" },
        button23: { scriptIcon: '  ', pronunciationText: "ss" },
        button24: { scriptIcon: '', pronunciationText: "h" },
        button25: { scriptIcon: '', pronunciationText: "j" },
        button26: { scriptIcon: '', pronunciationText: "ngw" },
        button27: { scriptIcon: '', pronunciationText: "dw" },
        button28: { scriptIcon: '', pronunciationText: "gw" }
    };

    return (
        <View contentContainerStyle={styles.buttonGrid}>
            {Object.entries(consonantsDictionary).map(([key, value]) => (
                <TengwarScriptButton key={key} scriptIcon={value.scriptIcon} scriptPronunciation={value.pronunciationText} />
            ))}
        </View>
    );
};

const VowelButtonGrid = () => {

    const consonantsDictionary = {
        button1: { scriptIcon: '', pronunciationText: "a" },
        button2: { scriptIcon: '', pronunciationText: "e" },
        button3: { scriptIcon: '', pronunciationText: "i" },
        button4: { scriptIcon: '', pronunciationText: "o" },
        button5: { scriptIcon: '', pronunciationText: "u" },
        button6: { scriptIcon: '', pronunciationText: "y" },
        button7: { scriptIcon: '', pronunciationText: "á/aa" },
        button8: { scriptIcon: '', pronunciationText: "é/ee" },
        button9: { scriptIcon: '', pronunciationText: "í/ii" },
        button10: { scriptIcon: '', pronunciationText: "ó/oo" },
        button11: { scriptIcon: '', pronunciationText: "ú/uu" },
        button12: { scriptIcon: '', pronunciationText: "ý/yy" },
    };

    return (
        <View contentContainerStyle={styles.buttonGrid}>
            {Object.entries(consonantsDictionary).map(([key, value]) => (
                <TengwarScriptButton key={key} scriptIcon={value.scriptIcon} scriptPronunciation={value.pronunciationText} />
            ))}
        </View>
    );
};

const DiphthongButtonGrid = () => {

    const consonantsDictionary = {
        button1: { scriptIcon: '', pronunciationText: "ae" },
        button2: { scriptIcon: '', pronunciationText: "oe" },
        button3: { scriptIcon: '', pronunciationText: "ai" },
        button4: { scriptIcon: '', pronunciationText: "ei" },
        button5: { scriptIcon: '', pronunciationText: "ui" },
        button6: { scriptIcon: '', pronunciationText: "au/aw" },
    };

    return (
        <View contentContainerStyle={styles.buttonGrid}>
            {Object.entries(consonantsDictionary).map(([key, value]) => (
                <TengwarScriptButton key={key} scriptIcon={value.scriptIcon} scriptPronunciation={value.pronunciationText} />
            ))}
        </View>
    );
};

const SymbolButtonGrid = () => {

    const consonantsDictionary = {
        button1: { scriptIcon: '', pronunciationText: "short carrier" },
        button2: { scriptIcon: '', pronunciationText: "long carrier" },
        button3: { scriptIcon: '⸱', pronunciationText: "[ , ]" },
        button4: { scriptIcon: '⁘', pronunciationText: "[ . ]" },
        button5: { scriptIcon: '', pronunciationText: "[ ! ]" },
        button6: { scriptIcon: '', pronunciationText: "[ ? ]" },
    };

    return (
        <View contentContainerStyle={styles.buttonGrid}>
            {Object.entries(consonantsDictionary).map(([key, value]) => (
                <TengwarScriptButton key={key} scriptIcon={value.scriptIcon} scriptPronunciation={value.pronunciationText} />
            ))}
        </View>
    );
};

const NumberButtonGrid = () => {

    const consonantsDictionary = {
        button1: { scriptIcon: '', pronunciationText: "1" },
        button2: { scriptIcon: '', pronunciationText: "2" },
        button3: { scriptIcon: '', pronunciationText: "3" },
        button4: { scriptIcon: '', pronunciationText: "4" },
        button5: { scriptIcon: '', pronunciationText: "5" },
        button6: { scriptIcon: '', pronunciationText: "6" },
        button7: { scriptIcon: '', pronunciationText: "7" },
        button8: { scriptIcon: '', pronunciationText: "8" },
        button9: { scriptIcon: '', pronunciationText: "9" },
        button10: { scriptIcon: '', pronunciationText: "0" },
    };

    return (
        <View contentContainerStyle={styles.buttonGrid}>
            {Object.entries(consonantsDictionary).map(([key, value]) => (
                <TengwarScriptButton key={key} scriptIcon={value.scriptIcon} scriptPronunciation={value.pronunciationText} />
            ))}
        </View>
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

                    <TextButton text={"Start learning the script"} style={styles.button} />

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

                <AppH1 style={styles.heading}>
                    Numbers
                </AppH1>

                <NumberButtonGrid />

            </View>
        </ScrollView>
    );
};

export default LearnTengwarPage;
