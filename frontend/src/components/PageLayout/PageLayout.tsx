import styles from './PageLayout.module.css';
import {Props} from './types';
import {PageLayoutFooter} from 'components/PageLayout/PageLayoutFooter';
import {PageLayoutHeader} from 'components/PageLayout/PageLayoutHeader';
import {useEffect, useRef} from 'react';
import {useTheme} from 'shared/hooks/useTheme';

/**
 * Компонент-обёртка для формирования шапки и подвала страницы.
 */
export const PageLayout = ({children}: Props) => {
	const {theme} = useTheme();
	const root = document.querySelector<HTMLElement>(':root');

	let bgRightLight: string;
	let bgLeftLight: string;
	let bgRightDark: string;
	let bgLeftDark: string;
	const refEl = useRef<HTMLElement>(null);

	/**
	 * Не очень элегантно, зато переиспользуем цвета из `colors.css` и менять
	 */
	if (refEl.current) {
		const style = window.getComputedStyle(refEl.current);

		bgRightLight = style.getPropertyValue('--app-background-right-light');
		bgLeftLight = style.getPropertyValue('--app-background-left-light');
		bgRightDark = style.getPropertyValue('--app-background-right-dark');
		bgLeftDark = style.getPropertyValue('--app-background-left-dark');
	}

	const setLightThemeColor = (root: HTMLElement | null) => {
		root?.style.setProperty('--app-background-right', bgRightLight);
		root?.style.setProperty('--app-background-left', bgLeftLight);
	};

	const setDarkThemeColor = (root: HTMLElement | null) => {
		root?.style.setProperty('--app-background-right', bgRightDark);
		root?.style.setProperty('--app-background-left', bgLeftDark);
	};

	useEffect(() => {
		if (root?.style) {
			theme === 'light'
				? setLightThemeColor(root)
				: setDarkThemeColor(root)
			;
		}
	}, [theme, root]);

	return (
		<div className={styles.container} ref={refEl}>
			<PageLayoutHeader />
			<main className={styles.content}>{children}</main>
			<PageLayoutFooter />
		</div>
	);
};
