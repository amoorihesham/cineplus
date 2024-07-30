import { useParams } from 'react-router-dom';
import { ClockIcon, LanguageIcon, StarIcon } from '@heroicons/react/16/solid';
import { apiUrls } from '../../utils';
import { useMovieData } from '../../hooks';
import { IGenre, IProductionCompany, ISpokenLanguages } from '../../types';
import ReactPlayer from 'react-player';

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
			<div className='top-info flex items-center justify-between mb-5 flex-col lg:flex-row'>
				<h2 className='text-white font-bold text-3xl'>{data.title}</h2>
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
			<div className='flex gap-2 mb-5'>
				<img
					src={`${apiUrls.imagesUrl}${data.backdrop_path}`}
					alt={data.title}
					style={{ aspectRatio: 1 / 1 }}
					className='hidden lg:block'
				/>
				<div className='trailler flex-grow'>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${data.videos.results[0].key}`}
						pip={true}
						width={'100%'}
						height={'100%'}
						style={{ borderRadius: '1rem' }}
					/>
				</div>
			</div>
			<hr className='w-48 h-1 mx-auto border-0 rounded bg-primary-800 mb-5' />

			<div className='details text-white flex justify-between flex-col lg:flex-row'>
				<div className='left'>
					<h4 className=' font-bold text-2xl mb-3 '>Overview.</h4>
					<p className=' font-light  max-w-2xl'>{data.overview}</p>
				</div>
				<div className='right'>
					<p className='font-bold mt-4'>
						Release In: <span className='font-light'>{data.release_date}</span>
					</p>
					<div className='companies flex gap-2 mt-4 flex-col lg:flex-row '>
						<p className='font-bold'>Production Companies:</p>
						<div className='flex gap-2 flex-wrap'>
							{data.production_companies.map((company: IProductionCompany) => (
								<span className='font-thin' key={company.id}>
									{company.name},
								</span>
							))}
						</div>
					</div>
					<div className='languages flex flex-col gap-2 mt-4 lg:flex-row'>
						<p className='font-bold'>Spoken Languages:</p>
						<div className='flex gap-2'>
							{data.spoken_languages.map((language: ISpokenLanguages) => (
								<span className='font-thin' key={language.name}>
									{language.name},
								</span>
							))}
						</div>
					</div>
					<div className='genres flex items-center gap-2 mt-4'>
						<p className='font-bold'>Genres:</p>
						{data.genres.map((genre: IGenre) => (
							<span className='font-thin' key={genre.id}>
								{genre.name},
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoviePage;
