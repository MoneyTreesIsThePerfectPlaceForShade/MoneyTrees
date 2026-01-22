export const getGreetingsText = async () => {
	try {
		const response = await fetch('http://localhost/');
		const message = await response.json();

		return message.message;
	} catch {
	}
};
