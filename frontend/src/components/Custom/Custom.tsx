import styles from './Custom.module.css';
import cn from 'classnames';
import {useTheme} from 'shared/hooks/useTheme';

export const Custom = () => {
	const {theme} = useTheme();

	const compStyles = cn({
		[styles.container]: true,
		[styles.dark]: theme === 'dark',
		[styles.light]: theme === 'light'
	});

	return (
		<div className={compStyles}>
			Some Content
		</div>
	);
};
