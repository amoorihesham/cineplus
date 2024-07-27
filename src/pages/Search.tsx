import { motion } from 'framer-motion';
import { InputField, ListItterable, Spinner } from '../components';
import { useState } from 'react';

const Search = () => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<motion.div
			className='search-page w-full flex flex-col items-center'
			initial={{ x: '-100%' }}
			animate={{ x: '0' }}
			exit={{ y: '-100%' }}
			transition={{ duration: 0.3 }}
		>
			<InputField
				labelText='Search By Name'
				placeHolder='ex: batman...'
				type='text'
				explainText='Search For Movies, Series By Name'
				resultsSetter={setResults}
				statusSetter={setIsLoading}
			/>
			<div className='results mt-10'>
				{isLoading && results.length === 0 && <Spinner />}
				<ListItterable list={results} sectionClass='search-results' />
			</div>
		</motion.div>
	);
};

export default Search;
