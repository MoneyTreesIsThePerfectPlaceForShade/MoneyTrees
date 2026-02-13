import './App.module.css';
// import {getHeroes} from './helpers';
// import {Custom} from 'components/Custom/Custom';
import {PageLayout} from 'components/PageLayout/PageLayout';
// import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';
// import {useCallback, useEffect, useState} from 'react';
import {useTheme} from 'shared/hooks/useTheme';
// import {debounce} from 'shared/utils/debounce';

export const App = () => {
	const {theme} = useTheme();
	// const [searchHeroe, setSearchHeroe] = useState('');
	// const [heroes, setHeroes] = useState<{id: number, name: string}[]>([]);

	// const root = document.querySelector<HTMLElement>(':root');

	// /**
	//  * См. colors.css
	//  * TODO: вероятно это стоит вынести в useEffect
	//  */
	// if (root?.style) {
	// 	theme === 'light'
	// 		? root.style.setProperty('--background-color', '#F5F5F5')
	// 		: root.style.setProperty('--background-color', '#0a1928');
	// 	;
	// }

	// const fetchHeroes = useCallback(debounce(async (query: string, signal: AbortSignal) => {
	// 	try {
	// 		const data = await getHeroes(query, signal);

	// 		setHeroes(data);
	// 	} catch (e) {
	// 		console.log('Отменился запрос', e);
	// 	}
	// }), []);

	// useEffect(() => {
	// 	if (!searchHeroe) {
	// 		return;
	// 	}

	// 	const controller = new AbortController();
	// 	const signal = controller.signal;

	// 	fetchHeroes(searchHeroe, signal);

	// 	return () => {
	// 		controller.abort();
	// 	};
	// }, [searchHeroe, fetchHeroes]);

	// const renderHeroes = () => {
	// 	if (heroes?.length) {
	// 		return heroes.map(heroe => <div key={heroe.id}>{heroe.name}</div>);
	// 	}

	// 	return null;
	// };

	return (
		<PageLayout>
			<div data-testid="app">
				<div style={{
					margin: '5rem'
				}}
				>
					{/* <Custom /> */}
					{/* <input onChange={e => setSearchHeroe(e.target.value)} type="text" /> */}
					{/* {renderHeroes()} */}
				</div>
			</div >
		</PageLayout>
	);
};
