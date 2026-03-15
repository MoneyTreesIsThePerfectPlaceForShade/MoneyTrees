import styles from './Menu.module.css';
import {MenuTile} from './MenuTile';
import {Props} from './types';
import cn from 'classnames';

export const Menu = ({menuTiles}: Props) => {
	const containerStyles = cn({
		[styles.container]: true
	});

	return (
		<div className={containerStyles}>
			{menuTiles.map(tile => <MenuTile key={tile.order} tile={tile} />)}
		</div>
	);
};
