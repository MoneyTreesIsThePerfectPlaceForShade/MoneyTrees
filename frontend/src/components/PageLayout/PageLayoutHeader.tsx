import styles from './PageLayoutHeader.module.css';
import {Menu} from 'components/Menu/Menu';
import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';

export const PageLayoutHeader = () => {
	const menuTiles = [
		{order: 1, page: '/music', title: 'Музыка'},
		{order: 0, page: '/', title: 'Дом'}
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
