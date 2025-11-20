import {useTheme} from 'shared/hooks/useTheme';

export const ToggleTheme = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<button onClick={toggleTheme}>
			{theme === 'light' ? 'Светлая' : 'Тёмная'} тема
		</button>
	);
};
