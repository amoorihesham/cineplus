import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout';
import { lazy, Suspense } from 'react';
import { Spinner } from '../components';

// Lazy loading pages to improve load times
const Home = lazy(() => import('../pages/Home'));
const Popular = lazy(() => import('../pages/Popular'));
const Series = lazy(() => import('../pages/Series'));
const MoviePage = lazy(() => import('../pages/MoviePage'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				index: true,
				element: (
					<Suspense fallback={<Spinner />}>
						<Home />
					</Suspense>
				),
			},
			{
				path: '/popular',
				element: (
					<Suspense fallback={<Spinner />}>
						<Popular />
					</Suspense>
				),
			},
			{
				path: '/series',
				element: (
					<Suspense fallback={<Spinner />}>
						<Series />
					</Suspense>
				),
			},
			{
				path: 'movie/:id',
				element: (
					<Suspense fallback={<Spinner />}>
						<MoviePage />
					</Suspense>
				),
			},
		],
	},
]);

export default router;
