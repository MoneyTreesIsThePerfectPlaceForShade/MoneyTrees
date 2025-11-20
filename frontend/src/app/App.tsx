import './App.module.css';
import {Practice} from 'components/Practice/Practice';
import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';

export const App = () => (
	<div data-testid="app">
		<ToggleTheme />
		<Practice />
	</div >
);
