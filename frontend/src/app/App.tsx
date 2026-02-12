import './App.module.css';
import {getHeroes, getRandomHexColor} from './helpers';
import {Custom} from 'components/Custom/Custom';
import {ToggleTheme} from 'components/ToggleTheme/ToggleTheme';
import {useCallback, useEffect, useState} from 'react';
import {useTheme} from 'shared/hooks/useTheme';
import {debounce, throttle} from 'shared/utils/debounce';

export const App = () => {
	const {theme} = useTheme();
	const [searchHeroe, setSearchHeroe] = useState('');
	const [heroes, setHeroes] = useState<{id: number, name: string}[]>([]);

	const [count, setCount] = useState(0);
	const [throttleCount, setThrottleCount] = useState(0);

	const [color, setColor] = useState('#F5F5F5')

	const root = document.querySelector<HTMLElement>(':root');

	const fetchCount = useCallback(throttle(() => setThrottleCount(prev => prev + 1)), []);
	
	// хочу сделать смену цвета бэкграунда раз в сек
	const changeBg = useCallback(throttle(() => setColor(getRandomHexColor()), 2500), []);

	useEffect(() => {
		document.addEventListener('mousemove', () => {
			setCount(count + 1);
			fetchCount(throttleCount);
			changeBg();
		})

		root?.style.setProperty('--background-color', color)
	}, [count, throttleCount])

	/**
	 * См. colors.css
	 * TODO: вероятно это стоит вынести в useEffect
	 */
	// if (root?.style) {
	// 	theme === 'light'
	// 		? root.style.setProperty('--background-color', '#F5F5F5')
	// 		: root.style.setProperty('--background-color', '#0a1928');
	// 	;
	// }

	const fetchHeroes = useCallback(debounce(async (query: string, signal: AbortSignal) => {
		try {
			const data = await getHeroes(query, signal);

			setHeroes(data);
		} catch (e) {
			console.log('Отменился запрос', e);
		}
	}), []);

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
				{/* <ToggleTheme />
				<Custom />
				<input onChange={e => setSearchHeroe(e.target.value)} type="text" />
				{renderHeroes()} */}
				<div>normal</div>
				{count}
				<div>throttle</div>
				{throttleCount}
			</div>
		</div >
	);
};
