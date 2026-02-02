/**
 * TODO:
 * @param callback
 * @param delay
 * @returns
 */
export const debounce = (callback: Function, delay: number = 1000) => {
	let timer;

	return (...args: any[]) => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			callback(...args);
		}, delay);
	};
};
