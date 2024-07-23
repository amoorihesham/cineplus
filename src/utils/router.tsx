import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spinner } from '../components';
import { IntroLayout, MainLayout } from '../layout';

// Lazy loading pages to improve load times
const TopRated = lazy(() => import('../pages/TopRated'));
const Popular = lazy(() => import('../pages/Popular'));
const Series = lazy(() => import('../pages/Series'));
const MoviePage = lazy(() => import('../pages/MoviePage'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <IntroLayout />,
	},
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/top-rated',
				index: true,
				element: (
					<Suspense fallback={<Spinner />}>
						<TopRated />
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
