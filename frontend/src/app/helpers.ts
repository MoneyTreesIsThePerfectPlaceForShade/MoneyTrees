export const getGreetingsText = async () => {
	try {
		const response = await fetch('http://localhost:8002/');
		const message = await response.json();

		return message.message;
	} catch {
	}
};

export const getHeroes = async (heroe: string, signal: AbortSignal) => {
	try {
		if (heroe) {
			const response = await fetch(`http://localhost:8002/heroes/${heroe}`, {signal});
			const resHeroe = await response.json();

			return resHeroe;
		}
	} catch (e) {
		console.error('Не смог получить героя', heroe, e);
	}
};

export function getRandomHexColor(): string {
  // Генерируем случайное число от 0 до 0xFFFFFF (16777215)
  const random = Math.floor(Math.random() * 0xffffff);

  // Преобразуем в 16‑ричную строку и добавляем ведущие нули при необходимости
  const hex = random.toString(16).padStart(6, "0");

  return `#${hex.toUpperCase()}`;
}