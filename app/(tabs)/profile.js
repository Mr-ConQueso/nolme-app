import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import AppView from "../../components/theme/AppView";
import Colors from "../../constants/Colors";
import AppH1 from "../../components/theme/AppH1";
import AppH2 from "../../components/theme/AppH2";
import {responsiveWidth} from "react-native-responsive-dimensions";
import StatsOverviewBox from "../../components/exercises/StatsOverviewBox";
import StatsAchievementsBox from "../../components/exercises/StatsAchievementsBox";
import icons from "../../constants/Icons";
import StatsProgressBox from "../../components/exercises/StatsProgressBox";
import {IsVertical, SIZES} from "../../constants/Theme";
import AppSafeAreaView from "../../components/theme/AppSafeAreaView";
import NavBar from "../../components/NavBar";

const AchievementsGrid = () => {

  const smallAchievementsDictionary = {
    button1: { achievementIcon: icons.unit1, achievementName: "example1" },
    button2: { achievementIcon: icons.unit1, achievementName: "example2" },
    button3: { achievementIcon: icons.unit1, achievementName: "example3" },
    button4: { achievementIcon: icons.unit1, achievementName: "example4" },
    button5: { achievementIcon: icons.unit1, achievementName: "example5" },
    button6: { achievementIcon: icons.unit1, achievementName: "example6" },
  };
  const achievementsDictionary = {
    button1: { achievementIcon: '', achievementName: "t" },
    button2: { achievementIcon: '', achievementName: "th" },
    button3: { achievementIcon: '', achievementName: "p" },
    button4: { achievementIcon: '', achievementName: "c" },
    button5: { achievementIcon: '', achievementName: "ch" },
    button6: { achievementIcon: '', achievementName: "d" },
    button7: { achievementIcon: '', achievementName: "dh" },
    button8: { achievementIcon: '', achievementName: "b" },
    button9: { achievementIcon: '', achievementName: "g" },
    button10: { achievementIcon: '', achievementName: "v" }
  };
  if (IsVertical()) {
    return (
        <AppView style={styles.buttonGrid}>
          {Object.entries(smallAchievementsDictionary).map(([key, value]) => (
              <StatsAchievementsBox key={key} achievementIcon={value.achievementIcon} />
          ))}
        </AppView>
    );
  }
  return (
      <AppView style={styles.buttonGrid}>
        {Object.entries(achievementsDictionary).map(([key, value]) => (
            <StatsAchievementsBox key={key} achievementIcon={value.achievementIcon} />
        ))}
      </AppView>
  );

};

const MainPage = () => {
  return (
      <AppSafeAreaView style={styles.container}>
        <ScrollView>
          <AppView style={styles.body}>

            <AppH1 style={styles.mainHeader}>User Name</AppH1>
            <AppView style={styles.subtitleRow}>
              <AppH2>@Username  </AppH2>
              <MaterialIcons name="fiber-manual-record" size={14} color={Colors.dark.subtitle} />
              <AppH2>  Joined April 2024</AppH2>
            </AppView>

            {/* Achievements */}
            <AppView style={styles.headerButtonRow}>
              <AppH1 style={styles.header}>Achievements</AppH1>
              <TouchableOpacity style={styles.button}>
                <AppH2  style={styles.buttonText}>VIEW ALL</AppH2>
              </TouchableOpacity>
            </AppView>
            <AchievementsGrid />

            {/* Overview */}
            <AppH1 style={styles.header}>Overview</AppH1>
            <AppView style={styles.gridContainer}>
              <AppView style={styles.boxRow}>
                <StatsOverviewBox icon={icons.fire} title="3" text="Day Streak"/>
                <StatsOverviewBox icon={icons.fire} title="1335" text="Total XP"/>
              </AppView>
              <AppView style={styles.boxRow}>
                <StatsOverviewBox icon={icons.fire} title="Gold" text="League"/>
                <StatsOverviewBox icon={icons.fire} title="0" text="Total Achivements"/>
              </AppView>
            </AppView>

            <AppH1 style={styles.header}>Weekly Progress</AppH1>

            <StatsProgressBox />

          </AppView>
        </ScrollView>
        <NavBar />
      </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.background,
    flex: 1,
  },
  body: {
    width: SIZES.defaultContentWidth,
    alignSelf: 'center',
    paddingTop: 30
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  headerButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.dark.tertiary,
  },
  gridContainer: {
    marginBottom: 20,
    width: '100%'
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default MainPage;