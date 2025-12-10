import './App.module.css';
import {Custom} from 'components/Custom/Custom';
import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';
import {useTheme} from 'shared/hooks/useTheme';

export const App = () => {
	const {theme} = useTheme();
	const root = document.querySelector<HTMLElement>(':root');

	/**
	 * См. colors.css
	 */
	if (root?.style) {
		theme === 'light'
			? root.style.setProperty('--background-color', '#F5F5F5')
			: root.style.setProperty('--background-color', '#143250');
		;
	}

	return (
		<div data-testid="app">
			<div style={{
				margin: '5rem'
			}}
			>
				<ToggleTheme />
			</div>
			<Custom />
		</div >
	);
};
