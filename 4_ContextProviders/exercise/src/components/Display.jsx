import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function Display({children}) {
    const { theme } = useContext(AppContext);

    const appStyles = {
        width: '500px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: theme ? '#121212' : '#f9f9f9',
        color: theme ? '#ffffff' : '#000000',
        minHeight: '100vh',
        transition: 'background-color 0.3s, color 0.3s',
      };

    return (
        <div style={appStyles}>
            {children}
        </div>
    )
}

export default Display;
