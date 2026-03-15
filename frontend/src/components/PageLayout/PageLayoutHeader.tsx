import styles from './PageLayoutHeader.module.css';
import {Menu} from 'components/Menu/Menu';
import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';

export const PageLayoutHeader = () => {
	const menuTiles = [
		{order: 1, page: '/music', title: 'Музыка'},
		{order: 0, page: '/', title: 'Дом'},
		{order: 4, title: 'Обо мне 4'},
		{order: 3, title: 'Бла-бла 3'},
		{order: 2, title: 'Что-то ещё 2'}
	].sort((firstTile, secondTile) => firstTile.order - secondTile.order);

	return (
		<header className={styles.container}>
			<span className={styles.themeToggle}>
				<ToggleTheme />
			</span>
			<span className={styles.menu}>
				<Menu menuTiles={menuTiles} />
			</span>
		</header>
	);
};
