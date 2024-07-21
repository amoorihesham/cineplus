import { useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const savedTheme: string | null = localStorage.getItem('theme');
	const [theme, setTheme] = useState(savedTheme || 'light');

	const toggleTheme = (newTheme: 'light' | 'dark') => {
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	useEffect(() => {
		if (theme === 'light') {
			document.body.classList.remove('dark');
		} else {
			document.body.classList.add('dark');
		}
	}, [theme]);
	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
