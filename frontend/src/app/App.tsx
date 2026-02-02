import './App.module.css';
import {getHeroes} from './helpers';
import {Custom} from 'components/Custom/Custom';
import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';
import {useCallback, useEffect, useState} from 'react';
import {useTheme} from 'shared/hooks/useTheme';
import {debounce} from 'shared/utils/debounce';

export const App = () => {
	const {theme} = useTheme();
	const [searchHeroe, setSearchHeroe] = useState('');
	const [heroes, setHeroes] = useState<{id: number, name: string}[]>([]);

	const root = document.querySelector<HTMLElement>(':root');

	/**
	 * См. colors.css
	 */
	if (root?.style) {
		theme === 'light'
			? root.style.setProperty('--background-color', '#F5F5F5')
			: root.style.setProperty('--background-color', '#0a1928');
		;
	}

	const fetchHeroes = useCallback(debounce(async (query: string, signal: AbortSignal) => {
		try {
			const data = await getHeroes(query, signal);

			setHeroes(data);
		} catch (e) {
			console.log('Отменился запрос', e);
		}
	}, 500), []);

	useEffect(() => {
		if (!searchHeroe) {
			return;
		}

		const controller = new AbortController();
		const signal = controller.signal;

		fetchHeroes(searchHeroe, signal);

		return () => {
			controller.abort();
		};
	}, [searchHeroe, fetchHeroes]);

	/**
	 * Promises
	*/
	// useEffect(() => {
	// 	if (!searchHeroe) {
	// 		return;
	// 	}

	// 	const controller = new AbortController();
	// 	const signal = controller.signal;

	// 	getHeroes(searchHeroe, signal)
	// 		.then(data => {
	// 			setHeroes(data);

	// 			return undefined;
	// 		})
	// 		.catch(() => {
	// 			// error handling
	// 		});

	// 	return () => {
	// 		controller.abort();
	// 	};
	// }, [searchHeroe]);

	const renderHeroes = () => {
		if (heroes?.length) {
			return heroes.map(heroe => <div key={heroe.id}>{heroe.name}</div>);
		}

		return null;
	};

	return (
		<div data-testid="app">
			<div style={{
				margin: '5rem'
			}}
			>
				<ToggleTheme />
			</div>
			<Custom />
			<input onChange={e => setSearchHeroe(e.target.value)} type="text" />
			{renderHeroes()}
		</div >
	);
};
