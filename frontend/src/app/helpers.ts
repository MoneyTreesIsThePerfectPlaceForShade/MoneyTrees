export const getGreetingsText = async () => {
	try {
		const response = await fetch('http://localhost:8000/');
		const message = await response.json();

		return message.message;
	} catch {
	}
};

export const getHeroes = async (heroe: string) => {
	try {
		if (heroe) {
			const response = await fetch(`http://localhost:8000/heroes/${heroe}`);
			const resHeroe = await response.json();

			return resHeroe;
		}
	} catch (e) {
		console.error('Не смог получить героя', e);
	}
};
