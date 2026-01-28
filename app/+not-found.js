import {Link, Stack} from 'expo-router';
import {StyleSheet} from 'react-native';
import AppView from "../components/theme/AppView";
import AppText from "../components/theme/AppText";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <AppView style={styles.container}>
        <AppText style={styles.title}>This screen doesn't exist.</AppText>

        <Link href="/" style={styles.link}>
          <AppText style={styles.linkText}>Go to home screen!</AppText>
        </Link>
      </AppView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
