import './App.module.css';
import {getGreetingsText} from './helpers';
import {Custom} from 'components/Custom/Custom';
import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';
import {useEffect, useState} from 'react';
import {useTheme} from 'shared/hooks/useTheme';

export const App = () => {
	const {theme} = useTheme();
	const [message, setMessage] = useState('');
	const root = document.querySelector<HTMLElement>(':root');

	/**
	 * См. colors.css
	 */
	if (root?.style) {
		theme === 'light'
			? root.style.setProperty('--background-color', '#F5F5F5')
			: root.style.setProperty('--background-color', '#0a1928');
		;
	}

	useEffect(() => {
		setMessage(getGreetingsText());
	}, []);

	return (
		<div data-testid="app">
			<div style={{
				margin: '5rem'
			}}
			>
				<ToggleTheme />
			</div>
			<div>{message}</div>
			<Custom />
		</div >
	);
};
