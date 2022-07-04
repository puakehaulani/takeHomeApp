import React, { createContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Manage theme state
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider
            value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeContext,
    ThemeProvider
}