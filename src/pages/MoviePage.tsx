import { useParams } from 'react-router-dom';
import { ClockIcon, LanguageIcon, StarIcon } from '@heroicons/react/16/solid';
import { apiUrls } from '../utils';
import { useMovieData } from '../hooks';
import { IGenre, IProductionCompany, ISpokenLanguages } from '../types';

const MoviePage = () => {
	const { id } = useParams();
	const {
		data: { data },

		isError,
		error,
	} = useMovieData(id as string);

	if (isError) {
		return <h1>{error?.message}</h1>;
	}

	return (
		<div className='content'>
			<div className='flex items-center justify-between'>
				<h2 className='text-black dark:text-white font-bold text-3xl'>{data.title}</h2>
				<div className='info text-white  font-semibold flex items-center justify-between gap-5'>
					<p className='flex items-center gap-1 bg-lightNavy  px-2 py-1 rounded-md  justify-center'>
						<span>
							<StarIcon className='h-4' />
						</span>
						{data.vote_average.toFixed(2)}
					</p>
					<p className='flex items-center gap-1 bg-lightNavy  px-2 py-1 rounded-md  justify-center'>
						<span>
							<ClockIcon className='h-4' />
						</span>
						{data.runtime}M
					</p>
					<p className='bg-lightNavy  px-2 py-1 rounded-md flex items-center justify-center gap-1'>
						<span>
							<LanguageIcon className='h-4' />
						</span>
						{data.original_language}
					</p>
				</div>
			</div>
			<hr className='w-48 h-1 mx-auto my-4 bg-navy border-0 rounded md:my-10 dark:bg-lightNavy' />
			<div className='flex'>
				<div className='details text-black dark:text-white'>
					<h4 className=' font-bold text-2xl mb-3 '>Overview.</h4>
					<p className=' font-light line-clamp-3 max-w-3xl'>{data.overview}</p>
					<hr className='w-11/12 h-1  my-0 bg-navy border-0 rounded md:my-4 dark:bg-lightNavy' />
					<p className='font-bold mt-4'>
						Release In: <span className='font-light'>{data.release_date}</span>
					</p>
					<hr className='w-11/12 h-1  my-0 bg-navy border-0 rounded md:my-4 dark:bg-lightNavy' />
					<div className='companies flex items-center gap-2 mt-4'>
						<p className='font-bold'>Production Companies:</p>
						<div className='flex gap-2 flex-wrap'>
							{data.production_companies.map((company: IProductionCompany) => (
								<span className='font-thin' key={company.id}>
									{company.name},
								</span>
							))}
						</div>
					</div>
					<hr className='w-11/12 h-1  my-0 bg-navy border-0 rounded md:my-4 dark:bg-lightNavy' />

					<div className='languages flex items-center gap-2 mt-4'>
						<p className='font-bold'>Spoken Languages:</p>
						<div className='flex gap-2'>
							{data.spoken_languages.map((language: ISpokenLanguages) => (
								<span className='font-thin' key={language.name}>
									{language.name},
								</span>
							))}
						</div>
					</div>
					<hr className='w-11/12 h-1  my-0 bg-navy border-0 rounded md:my-4 dark:bg-lightNavy' />
					<p className='font-bold mt-4'>
						Budget: <span className='font-light'>$ {data.budget.toLocaleString()}</span>
					</p>
					<hr className='w-11/12 h-1  my-0 bg-navy border-0 rounded md:my-4 dark:bg-lightNavy' />
					<p className='font-bold mt-4'>
						revenue : <span className='font-light'>$ {data.revenue.toLocaleString()}</span>
					</p>
					<hr className='w-11/12 h-1  my-0 bg-navy border-0 rounded md:my-4 dark:bg-lightNavy' />
					<div className='genres flex items-center gap-2 mt-4'>
						<p className='font-bold'>Genres:</p>
						<div className='flex gap-2'>
							{data.genres.map((genre: IGenre) => (
								<span className='font-thin' key={genre.id}>
									{genre.name},
								</span>
							))}
						</div>
					</div>
				</div>
				<img src={`${apiUrls.imagesUrl}${data.backdrop_path}`} alt='' />
			</div>
		</div>
	);
};

export default MoviePage;
