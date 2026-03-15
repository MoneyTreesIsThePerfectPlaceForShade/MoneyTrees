import styles from './MenuTile.module.css';
import {Link} from 'react-router';

export const MenuTile = ({tile}) =>
	(
		<div className={styles.container}>
			<Link to={tile.page}>{tile.title}</Link>
		</div>
	)
;
