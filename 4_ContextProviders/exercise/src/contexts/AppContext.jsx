import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [theme, setTheme] = useState(true);
    const [userId, setUserId] = useState('bracej');

    const toggleTheme = (theme) => {
        setTheme(!theme);
    };

    return (
        <AppContext.Provider value={{ theme, userId, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
}
