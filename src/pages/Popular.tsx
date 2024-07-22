import { useState } from 'react';
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
		<div className='h-full container py-pageYpadding'>
			<ListItterable list={data.results} sectionClass='popular-list' />
			<div className='flex items-center justify-center mt-5'>
				<button
					className='flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
					onClick={() => setPage(page - 1)}
					disabled={page === 1 ? true : false}
				>
					Previous
				</button>

				<button
					className='flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
					onClick={() => setPage(page + 1)}
					disabled={page === data.total_pages ? true : false}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Popular;
