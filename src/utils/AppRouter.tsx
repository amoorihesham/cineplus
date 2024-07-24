import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Spinner } from '../components';
import { AnimatePresence } from 'framer-motion';
const TopRated = lazy(() => import('../pages/TopRated'));
const Popular = lazy(() => import('../pages/Popular'));
const Series = lazy(() => import('../pages/Series'));
const MoviePage = lazy(() => import('../pages/MoviePage'));

const AppRouter = () => {
	return (
		<AnimatePresence mode='wait'>
			<Routes>
				{/* <Route path='/' element={<IntroLayout />} /> */}
				<Route path='/' element={<MainLayout />}>
					<Route
						path={'top-rated'}
						index={true}
						element={
							<Suspense fallback={<Spinner />}>
								<TopRated />
							</Suspense>
						}
					/>
					<Route
						path={'popular'}
						element={
							<Suspense fallback={<Spinner />}>
								<Popular />
							</Suspense>
						}
					/>
					<Route
						path='/series'
						element={
							<Suspense fallback={<Spinner />}>
								<Series />
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
		</AnimatePresence>
	);
};

export default AppRouter;
