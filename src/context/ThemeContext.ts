import { createContext } from "react";

const defaultValue = {
    theme: 'light',
    toggleTheme: (_newTheme: 'light' | 'dark') => { }
}

const ThemeContext = createContext(defaultValue);

export default ThemeContext