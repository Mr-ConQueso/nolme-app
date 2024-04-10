import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './footer.style';
import {Link} from "expo-router";

const Footer = () => {
    return (
        <View style={styles.container}>

            {/* HOME */}
            <Link href="/sindarin/" asChild>
                <Pressable>
                    <Text>Home</Text>
                </Pressable>
            </Link>

            {/* SCRIPT */}
            <Link href="/sindarin/learn-tengwar" asChild>
                <Pressable>
                    <Text>Tengwar</Text>
                </Pressable>
            </Link>

            {/* EXERCISES */}
            <Link href="/sindarin/exercises" asChild>
                <Pressable>
                    <Text>Exercises</Text>
                </Pressable>
            </Link>

            {/* DICTIONARY */}
            <Link href="/sindarin/dictionary" asChild>
                <Pressable>
                    <Text>Dictionary</Text>
                </Pressable>
            </Link>
        </View>
    );
};

export default Footer;
