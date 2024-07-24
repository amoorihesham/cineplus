import { useState } from 'react';
import { motion } from 'framer-motion';
import { ListItterable } from '../components';
import { useGetPopular } from '../hooks';

const Popular = () => {
	const [page, setPage] = useState(1);

	const {
		data: { data },
		isError,
		error,
	} = useGetPopular(page);

	if (isError) {
		return <h1>{error?.message}</h1>;
	}

	return (
		<motion.div
			className='popular-page'
			initial={{ x: '-100%' }}
			animate={{ x: '0' }}
			exit={{ y: '-100%' }}
			transition={{ duration: 0.3 }}
		>
			<ListItterable list={data.results} sectionClass='popular-list' />
			<div className='flex items-center justify-center mt-5'>
				<button
					className='flex items-center justify-center px-3 h-8 text-sm font-medium text-white  bg-shades-primary-600 rounded-lg disabled:line-through disabled:cursor-not-allowed hover:bg-shades-primary-800 transition-colors duration-300'
					onClick={() => setPage(page - 1)}
					disabled={page === 1 ? true : false}
				>
					Previous
				</button>

				<button
					className='flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-white  bg-shades-primary-600 rounded-lg hover:bg-shades-primary-800 transition-colors duration-300'
					onClick={() => setPage(page + 1)}
					disabled={page === data.total_pages ? true : false}
				>
					Next
				</button>
			</div>
		</motion.div>
	);
};

export default Popular;
