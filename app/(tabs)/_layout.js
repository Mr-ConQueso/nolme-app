import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';
import {Pressable} from 'react-native';

import Colors from '../../constants/Colors';
import {useClientOnlyValue} from '../../components/theme/useClientOnlyValue';

function TabBarFocusableIcon(focused, defaultImg, focusedImg) {
    if (focused) {
        return (
            <Image
                style={{ width: 30, height: 25, marginBottom: -3 }}
                source={focusedImg}
            />
        );
    } else {
        return (
            <Image
                style={{ width: 30, height: 25 }}
                source={defaultImg}
            />
        );
    }
}

function TabBarIcon(props) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
          tabBarStyle: {
              backgroundColor: Colors.dark.background,
          },
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
            title: 'Home',
            headerTitle: "",
            headerStyle: {
                backgroundColor: Colors.dark.background,
            },
            //TabBarFocusableIcon: ({ focused }) => <TabBarIcon focused={focused} defaultImg="../../assets/icons/home-active.png" focusedImg="../../assets/icons/home-active.png" />,
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            headerRight: () => (
                <Link href="/userModal" asChild>
                    <Pressable>
                        {({ pressed }) => (
                            <FontAwesome
                                name="user"
                                size={25}
                                color={Colors.dark.text}
                                style={{
                                    marginRight: 30,
                                    opacity: pressed ? 0.5 : 1
                            }}
                            />
                        )}
                  </Pressable>
                </Link>
          ),
            headerLeft: () => (
                <Link href="/languageModal" asChild>
                    <Pressable>
                        {({ pressed }) => (
                            <FontAwesome
                                name="language"
                                size={25}
                                color={Colors.dark.text}
                                style={{
                                    marginLeft: 30,
                                    opacity: pressed ? 0.5 : 1
                            }}
                            />
                        )}
                    </Pressable>
                </Link>
            ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
            title: 'Exercises',
            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
        <Tabs.Screen
            name="tengwar"
            options={{
                title: 'Tengwar',
                headerShown: false,
                tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
            }}
        />
        <Tabs.Screen
            name="dictionary"
            options={{
                title: 'Dictionary',
                headerShown: false,
                tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
            }}
        />
    </Tabs>
  );
}
