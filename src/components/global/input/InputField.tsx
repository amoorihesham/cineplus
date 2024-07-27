import React from 'react';
import axios from 'axios';
import { apiUrls, getOptions } from '../../../utils';

const InputField = ({
	type,
	placeHolder,
	explainText,
	labelText,
	resultsSetter,
	statusSetter,
}: {
	type: string;
	placeHolder: string;
	explainText: string;
	labelText: string;
	resultsSetter: React.Dispatch<React.SetStateAction<any>>;
	statusSetter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const handleSearch = async (term: string) => {
		statusSetter(true);
		try {
			const { data } = await axios.get(`${apiUrls.searchUrl}${term}`, getOptions);
			resultsSetter(data?.results);
		} catch (error) {
			console.log(error);
		} finally {
			statusSetter(false);
		}
	};
	return (
		<div className='w-1/2 mx-auto'>
			<label htmlFor='helper-text' className='block mb-2 text-sm font-medium text-white'>
				{labelText}
			</label>
			<input
				type={type}
				id='helper-text'
				aria-describedby='helper-text-explanation'
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				placeholder={placeHolder}
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<p id='helper-text-explanation' className='mt-2 text-sm text-gray-200'>
				{explainText}
			</p>
		</div>
	);
};

export default InputField;
