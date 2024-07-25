import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Spinner } from '../components';
const MainLayout = lazy(() => import('../layout/MainLayout'));
const TopRated = lazy(() => import('../pages/TopRated'));
const Popular = lazy(() => import('../pages/Popular'));
const Series = lazy(() => import('../pages/Series'));
const Favorites = lazy(() => import('../pages/Favorites'));
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
						<AnimatePresence mode='wait'>
							<TopRated />
						</AnimatePresence>
					</Suspense>
				),
			},
			{
				path: '/popular',
				element: (
					<Suspense fallback={<Spinner />}>
						<AnimatePresence mode='wait'>
							<Popular />
						</AnimatePresence>
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
				path: '/movie/:id',
				element: (
					<Suspense fallback={<Spinner />}>
						<MoviePage />
					</Suspense>
				),
			},
			{
				path: '/favorites',
				element: (
					<Suspense fallback={<Spinner />}>
						<Favorites />
					</Suspense>
				),
			},
		],
	},
]);

export default router;
