import styles from './Menu.module.css';
import {Props} from './types';
import cn from 'classnames';
import {MenuTile} from 'components/MenuTile/MenuTile';

/**
 * Компонент для отображения верхнего меню.
 * TODO: сделать адаптив.
 */
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
