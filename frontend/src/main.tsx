import {App} from 'app/App';
import {ThemeProvider} from 'providers/ThemeProvider';
import {createRoot} from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
);
