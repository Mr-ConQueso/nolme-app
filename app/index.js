import { Redirect } from 'expo-router';
import { Text } from 'react-native';

export default function Page() {
    return <Redirect href={"/(tabs)/home"} />;
}