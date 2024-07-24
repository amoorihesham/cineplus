import { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContextType, ICardMovieTypeProps } from '../../../types';
import { AuthContext } from '../../../context';

const MovieCard = ({ movie }: ICardMovieTypeProps) => {
	const { user } = useContext(AuthContext) as authContextType;
	return (
		<div className='max-w-sm bg-slate-300 border border-gray-200 rounded-lg shadow dark:bg-primary-100 dark:border-gray-500'>
			<Link to={`/movie/${movie.id}`}>
				<img
					className='rounded-t-lg'
					src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
					alt={`${movie.title} poster`}
					loading='eager'
				/>
			</Link>
			<div className='p-5'>
				<Link to={`/movie/${movie.id}`}>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1'>
						{movie.title}
					</h5>
				</Link>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3'>
					{movie.overview}
				</p>
				<div className='btns flex items-center justify-between'>
					<Link
						to={`/movie/${movie.id}`}
						className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-navy rounded-lg hover:bg-lightNavy focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-navy dark:hover:bg-lightNavy dark:focus:ring-lightNavy'
					>
						Details
						<svg
							className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 14 10'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 5h12m0 0L9 1m4 4L9 9'
							/>
						</svg>
					</Link>
					{user && (
						<button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-navy dark:hover:bg-lightNavy dark:focus:ring-lightNavy transition-colors duration-300'>
							+ Favorites
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default memo(MovieCard);
