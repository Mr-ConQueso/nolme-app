import React from 'react';
import Colors from "../constants/Colors";
import AppView from "./theme/AppView";
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {FONTS, IsVertical} from "../constants/Theme";
import IconButton from "./buttons/IconButton";
import Icons from "../constants/Icons";
import IconTextButton from "./buttons/IconTextButton";
import {Link, usePathname} from "expo-router";
import AppH1 from "./theme/AppH1";

const Sidebar = ({currentPath}) => {
    return (
        <AppView style={styles.sidebar}>
            <AppView style={styles.sidebarBody}>

                <AppH1 style={styles.title}>
                    Nölme
                </AppH1>

                <Link href={"/sindarin/"}><IconTextButton
                    defaultIcon={Icons.homeActive}
                    unActiveIcon={Icons.homeUnactive}
                    title={"Home"}
                    size={30}
                    isActive={currentPath === '/sindarin'} />
                </Link>

                <Link href={"/sindarin/exercises"}><IconTextButton
                    defaultIcon={Icons.exercisesActive}
                    unActiveIcon={Icons.exercisesUnactive}
                    title={"Exercises"}
                    size={32}
                    isActive={currentPath === '/sindarin/exercises'} />
                </Link>

                <Link href={"/sindarin/tengwar"}><IconTextButton
                    defaultIcon={Icons.tengwarActive}
                    unActiveIcon={Icons.tengwarUnactive}
                    title={"Tengwar"}
                    size={40}
                    isActive={currentPath === '/sindarin/tengwar'} />
                </Link>

                <Link href={"/sindarin/dictionary"}><IconTextButton
                    defaultIcon={Icons.bookActive}
                    unActiveIcon={Icons.bookUnactive}
                    title={"Dictionary"}
                    size={30}
                    isActive={currentPath === '/sindarin/dictionary'} />
                </Link>

                <Link href={"profile"}><IconTextButton
                    defaultIcon={Icons.profileActive}
                    unActiveIcon={Icons.profileUnactive}
                    title={"Profile"}
                    size={25}
                    isActive={currentPath === '/profile'} />
                </Link>
            </AppView>
        </AppView>
    );
}

const BottomBar = ({currentPath}) => {
    return (
        <AppView style={styles.bottomBar}>

            <Link href={"/sindarin/"}><IconButton
                defaultIcon={Icons.homeActive}
                unActiveIcon={Icons.homeUnactive}
                size={30}
                isActive={currentPath === '/sindarin'} />
            </Link>

            <Link href={"/sindarin/exercises"}><IconButton
                defaultIcon={Icons.exercisesActive}
                unActiveIcon={Icons.exercisesUnactive}
                size={32}
                isActive={currentPath === '/sindarin/exercises'} />
            </Link>

            <Link href={"/sindarin/tengwar"}><IconButton
                defaultIcon={Icons.tengwarActive}
                unActiveIcon={Icons.tengwarUnactive}
                size={40}
                isActive={currentPath === '/sindarin/tengwar'} />
            </Link>

            <Link href={"/sindarin/dictionary"}><IconButton
                defaultIcon={Icons.bookActive}
                unActiveIcon={Icons.bookUnactive}
                size={30}
                isActive={currentPath === '/sindarin/dictionary'} />
            </Link>

            <Link href={"profile"}><IconButton
                defaultIcon={Icons.profileActive}
                unActiveIcon={Icons.profileUnactive}
                size={25}
                isActive={currentPath === '/profile'} />
            </Link>

        </AppView>
    );
}

export default function NavBar() {
    const pathname= usePathname();

    if (IsVertical()) {
         return <BottomBar currentPath={pathname} />;
    }
    return <Sidebar currentPath={pathname} />;
}

const styles = {
    sidebar: {
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: responsiveHeight(100),
        width: responsiveWidth(15),
        backgroundColor: Colors.dark.background,
        borderRightColor: Colors.dark.lightGray,
        borderRightWidth: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10,
    },
    sidebarBody: {
        alignItems: 'flex-start',
    },
    bottomBar: {
        position: 'absolute', bottom: 0, left: 0, right: 0,
        width: '100%',
        backgroundColor: Colors.dark.background,
        borderTopColor: Colors.dark.lightGray,
        borderTopWidth: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontFamily: FONTS.tengwar,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: Colors.dark.tertiary,
    }
};
