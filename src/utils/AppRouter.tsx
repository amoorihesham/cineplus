import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Spinner } from '../components';
import { AnimatePresence } from 'framer-motion';

const MainLayout = lazy(() => import('../layout/MainLayout'));
const Home = lazy(() => import('../pages/home/Home'));
const TopRated = lazy(() => import('../pages/top-rated/TopRated'));
const Popular = lazy(() => import('../pages/popular/Popular'));
const Series = lazy(() => import('../pages/series/Series'));
const Search = lazy(() => import('../pages/search/Search'));
const Favorites = lazy(() => import('../pages/favorites/Favorites'));
const MoviePage = lazy(() => import('../pages/movie-page/MoviePage'));

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
				path: '/top-rated',
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

const RouterProviderComponent = () => {
	return (
		<AnimatePresence mode='wait'>
			<RouterProvider router={router} />
		</AnimatePresence>
	);
};
export default RouterProviderComponent;
