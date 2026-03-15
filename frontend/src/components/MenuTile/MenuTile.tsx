import styles from './MenuTile.module.css';
import {Props} from './types';
import {Link} from 'react-router';

/**
 * Компонент для отображения плитки меню.
 */
export const MenuTile = ({tile}: Props) => (
	<div className={styles.container}>
		<Link to={tile.page}>{tile.title}</Link>
	</div>
);
