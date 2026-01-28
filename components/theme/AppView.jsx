import React, { createContext, useContext } from 'react';
import { View } from 'react-native';

// Create a context for the background color
const BackgroundContext = createContext();

// Custom hook to use the background color from the context
function useBackgroundColor() {
    return useContext(BackgroundContext);
}

export default function AppView({ children, style }) {
    // Get the background color from the context
    const backgroundColor = useBackgroundColor();

    return (
        <View style={[styles.view, { backgroundColor }, style]}>
            {children}
        </View>
    );
}

const styles = {
    view: {},
};

// Use a separate component to provide the background color through context
export function BackgroundProvider({ children, backgroundColor }) {
    return (
        <BackgroundContext.Provider value={backgroundColor}>
            {children}
        </BackgroundContext.Provider>
    );
}
