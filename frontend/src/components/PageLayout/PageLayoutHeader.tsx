import styles from './PageLayoutHeader.module.css';
import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';

export const PageLayoutHeader = () => {
	console.log('');
	return (
		<header className={styles.container}>
			<ToggleTheme />
		</header>
	);
};
