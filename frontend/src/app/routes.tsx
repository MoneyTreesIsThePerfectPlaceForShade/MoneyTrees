import {App} from './App';
import {Error} from 'pages/Error/Error';
import {Music} from 'pages/Music/Music';
import {createBrowserRouter} from 'react-router';

export const router = createBrowserRouter([
	{
		element: <App />,
		path: '/'
	},
	{
		element: <Music />,
		path: '/music'
	},
	{
		element: <Error />,
		path: '*'
	}
]);
