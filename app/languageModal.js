import {StatusBar} from 'expo-status-bar';
import {Platform, StyleSheet} from 'react-native';
import {View} from '../components/theme/Themed';
import {Link, router} from "expo-router";
import Colors from "../constants/Colors";
import AppText from "../components/theme/AppText";

export default function ModalScreen() {
  const isPresented = router.canGoBack();
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Change language</AppText>
      <View style={styles.separator} lightColor={Colors.light.text} darkColor={Colors.dark.lightGray} />

      {!isPresented && <Link href="../">Dismiss</Link>}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
