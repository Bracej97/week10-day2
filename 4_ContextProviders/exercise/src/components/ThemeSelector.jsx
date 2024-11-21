import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function ThemeSelector() {
    const { toggleTheme } = useContext(AppContext);
    const { theme } = useContext(AppContext)

    const handleThemeChange = () => {
        toggleTheme(theme);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold' }}>T' Dark Mode</label>
            <input type="checkbox" checked={theme} onChange={handleThemeChange} />
        </div>
    )
}

export default ThemeSelector;
