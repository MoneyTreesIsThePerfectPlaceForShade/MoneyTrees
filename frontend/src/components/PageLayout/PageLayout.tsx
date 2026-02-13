import {Props} from './types';
import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';
import {useEffect} from 'react';
import {useTheme} from 'shared/hooks/useTheme';

/**
 * Компонент-обёртка для формирования шапки и подвала страницы.
 */
export const PageLayout = ({children}: Props) => {
	const {theme} = useTheme();

	const root = document.querySelector<HTMLElement>(':root');

	useEffect(() => {
		/**
		 * См. colors.css
		 */
		if (root?.style) {
			theme === 'light'
				? root.style.setProperty('--background-color', '#F5F5F5')
				: root.style.setProperty('--background-color', '#0a1928');
			;
		}
	}, [theme, root?.style]);

	return (
		<div>
			{/* TODO: header */}
			<ToggleTheme />
			{children}
			{/* TODO: footer */}
		</div>
	);
};
