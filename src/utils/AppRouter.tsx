import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IntroLayout, MainLayout } from '../layout';
import { Spinner } from '../components';
const TopRated = lazy(() => import('../pages/TopRated'));
const Popular = lazy(() => import('../pages/Popular'));
const MoviePage = lazy(() => import('../pages/MoviePage'));

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<IntroLayout />} />
			<Route path='/' element={<MainLayout />}>
				<Route
					path={'/top-rated'}
					element={
						<Suspense fallback={<Spinner />}>
							<TopRated />
						</Suspense>
					}
				/>
				<Route
					path={'/popular'}
					element={
						<Suspense fallback={<Spinner />}>
							<Popular />
						</Suspense>
					}
				/>
				<Route
					path='/movie/:id'
					element={
						<Suspense fallback={<Spinner />}>
							<MoviePage />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	);
};

export default AppRouter;
