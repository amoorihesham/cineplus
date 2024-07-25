import { motion } from 'framer-motion';
import { useGetFavorites } from '../hooks';
import { ListItterable } from '../components';

const Favorites = () => {
	const movies = useGetFavorites();

	return (
		<motion.div
			className='popular-page '
			initial={{ x: '-100%' }}
			animate={{ x: '0' }}
			exit={{ y: '-100%' }}
			transition={{ duration: 0.3 }}
		>
			<p className='text-center mb-8 bg-shades-primary-600 w-fit m-auto py-1 px-3 rounded-lg text-white capitalize'>
				This is your Favorites list of movies. 
			</p>
			<ListItterable list={movies} sectionClass='favorites-list' />
		</motion.div>
	);
};

export default Favorites;
