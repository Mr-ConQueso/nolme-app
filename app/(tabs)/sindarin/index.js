import {FlatList, Image, SafeAreaView, StyleSheet,} from "react-native";
import Exercises from "../../../components/exercises/Exercises";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import data from "../../../data/courseData.json";

import {StatusBar} from "expo-status-bar";
import Colors from "../../../constants/Colors";
import AppView from "../../../components/theme/AppView";

const Home = () => {
  const navigation = useNavigation();

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <FlatList
            data={data.sections}
            renderItem={renderSection}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <AppView style={styles.body}>
                <Image
                    style={styles.unitLogo}
                    source={require("../../../assets/icons/unit1.png")}
                />
              </AppView>
            }
            ListFooterComponent={
              <AppView style={styles.body}>
                <Image
                    style={styles.unitLogo}
                    source={require("../../../assets/icons/unit2.png")}
                />
              </AppView>
            }
        />
      </SafeAreaView>
  );
};

const renderSection = ({ item }) => {
  const { id, data } = item;

  return (
      <AppView style={styles.section}>
        {data.map((tier) => {
          return (
              <AppView style={styles.tier} key={tier.tier}>
                {tier.exercises.map((exercise) => {
                  return <Exercises exercise={exercise} key={exercise.id} />;
                })}
              </AppView>
          );
        })}
      </AppView>
  );
};

const styles= StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  body: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  unitLogo: {
    height: 120,
    width: 200,
    margin: 15,
  },
  section: {
    flex: 1,
    paddingBottom: 60,
  },
  tier: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
});

export default Home;
