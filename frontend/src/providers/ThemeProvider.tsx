import {createContext, ReactNode, useState} from 'react';

export const ThemeContext = createContext({theme: 'light', toggleTheme: () => {}});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((prevTheme: string) => prevTheme === 'light' ? 'dark' : 'light');
	};

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	);
};
