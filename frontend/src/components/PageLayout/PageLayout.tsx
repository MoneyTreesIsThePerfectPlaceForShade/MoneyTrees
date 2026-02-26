import styles from './PageLayout.module.css';
import {Props} from './types';
import {PageLayoutFooter} from 'components/PageLayout/PageLayoutFooter';
import {PageLayoutHeader} from 'components/PageLayout/PageLayoutHeader';
import {useEffect} from 'react';
import {useTheme} from 'shared/hooks/useTheme';

/**
 * Компонент-обёртка для формирования шапки и подвала страницы.
 */
export const PageLayout = ({children}: Props) => {
	const {theme} = useTheme();

	const root = document.querySelector<HTMLElement>(':root');

	const setLightThemeColor = (root: HTMLElement | null) => {
		root?.style.setProperty('--app-background-right', '#a2bdc8');
		root?.style.setProperty('--app-background-left', '#314158');
	};

	const setDarkThemeColor = (root: HTMLElement | null) => {
		root?.style.setProperty('--app-background-right', '#314158');
		root?.style.setProperty('--app-background-left', '#a2bdc8');
	};

	useEffect(() => {
		/**
		 * См. colors.css
		 */
		// TODO: сделать градиент
		if (root?.style) {
			theme === 'light'
				? setLightThemeColor(root)
				: setDarkThemeColor(root)
			;
		}
	}, [theme, root]);

	return (
		<div className={styles.container}>
			<PageLayoutHeader />
			<main className={styles.content}>{children}</main>
			<PageLayoutFooter />
		</div>
	);
};
