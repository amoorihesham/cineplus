import { motion } from 'framer-motion';
import { ListItterable } from '../components';
import useTopRated from '../hooks/useTopRated';

const TopRated = () => {
	const {
		data: { data },

		error,
		isError,
	} = useTopRated(1);

	if (isError) {
		return <h1>{error?.message}</h1>;
	}

	return (
		<motion.div
			className='top-rated-page'
			initial={{ x: '-100%' }}
			animate={{ x: '0' }}
			exit={{ y: '-100%' }}
			transition={{ duration: 0.3 }}
		>
			<p className='text-center mb-8 bg-shades-primary-600 w-fit m-auto py-1 px-3 rounded-lg text-white capitalize'>
				this 20 movie top rated of all the time.
			</p>
			<ListItterable list={data.results} sectionClass='movies-list' />
		</motion.div>
	);
};

export default TopRated;
