import styles from './ToggleTheme.module.css';
import {useRef, useState} from 'react';
import {useTheme} from 'shared/hooks/useTheme';

export const ToggleTheme = () => {
	const {theme, toggleTheme} = useTheme();
	const [icon, setIcon] = useState(theme === 'light' ? '🌝' : '🌚');
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleClick = () => {
		buttonRef.current?.classList.add(styles.animation);

		setTimeout(() => {
			toggleTheme();
			setIcon(theme === 'light' ? '🌚' : '🌝');
		}, 1000);

		setTimeout(() => {
			buttonRef.current?.blur();
			buttonRef.current?.classList.remove(styles.animation);
		}, 2000);
	};

	return (
		<div className={styles.container}>
			<button
				className={styles.switchThemeButton}
				onClick={handleClick}
				ref={buttonRef}
			>
				{icon}
			</button>
		</div>
	);
};
