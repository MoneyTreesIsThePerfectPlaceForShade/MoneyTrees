import {App} from './App';
import {Error} from 'pages/Error/Error';
import {createBrowserRouter} from 'react-router';

export const router = createBrowserRouter([
	{
		element: <App />,
		path: '/'
	},
	{
		element: <Error />,
		path: '*'
	}
]);
