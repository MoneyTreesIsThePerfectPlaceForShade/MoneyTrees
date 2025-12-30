import {router} from 'app/routes';
import {ThemeProvider} from 'providers/ThemeProvider';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router/dom';

createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<RouterProvider router={router} />,
	</ThemeProvider>
);
