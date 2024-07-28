import { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/16/solid';
import { authContextType, ICardMovieTypeProps } from '../../../types';
import { AuthContext } from '../../../context';
import { addToFavorite } from '../../../config/functions';

const MovieCard = ({ movie }: ICardMovieTypeProps) => {
	const { user } = useContext(AuthContext) as authContextType;

	return (
		<motion.div
			className='max-w-sm  rounded-lg shadow-lg border border-primary-500 bg-shades-primary-300'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 0.4 }}
		>
			<Link to={`/movie/${movie.id}`}>
				<img
					className='rounded-t-lg'
					src={
						movie.backdrop_path
							? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
							: '/img-placeholder.webp'
					}
					alt={`${movie.title} poster`}
					loading='eager'
					style={{ aspectRatio: 2 / 1 }}
					width={366}
					height={180}
				/>
			</Link>
			<div className='p-5'>
				<Link to={`/movie/${movie.id}`}>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-primary-100 line-clamp-1'>
						{movie.title || movie.name}
					</h5>
				</Link>
				<p className='mb-3 font-normal text-primary-200 line-clamp-3 h-customPH'>{movie.overview}</p>

				{user && (
					<button
						className='flex items-center justify-center px-3 py-2 text-sm font-medium text-white rounded-lg focus:ring-4 focus:outline-none transition-colors duration-300 bg-shades-primary-600 hover:bg-shades-primary-800 w-full '
						onClick={() => addToFavorite(user, movie)}
					>
						<PlusIcon className='h-4 me-1' />
						Favorites
					</button>
				)}
			</div>
		</motion.div>
	);
};

export default memo(MovieCard);
