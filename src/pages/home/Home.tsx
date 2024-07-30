import { motion } from 'framer-motion';
import { ListItterable } from '../../components';
import { useGetTrending } from '../../hooks';

const Home = () => {
	const {
		data: { data },

		error,
		isError,
	} = useGetTrending();

	if (isError) {
		return <h1>{error?.message}</h1>;
	}

	return (
		<motion.div
			className='home-page'
			initial={{ x: '-100%' }}
			animate={{ x: '0' }}
			exit={{ y: '-100%' }}
			transition={{ duration: 0.3 }}
		>
			<p className='text-center mb-8 bg-shades-primary-600 w-fit m-auto py-1 px-3 rounded-lg text-white capitalize'>
				Trending This Week.
			</p>
			<ListItterable list={data.results} sectionClass='movies-list' />
		</motion.div>
	);
};

export default Home;
