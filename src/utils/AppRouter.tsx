import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Spinner } from '../components';
const MainLayout = lazy(() => import('../layout/MainLayout'));
const Home = lazy(() => import('../pages/Home'));
const Popular = lazy(() => import('../pages/Popular'));
const Series = lazy(() => import('../pages/Series'));
const Search = lazy(() => import('../pages/Search'));
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
							<Home />
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
				path: '/search',
				element: (
					<Suspense fallback={<Spinner />}>
						<Search />
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
