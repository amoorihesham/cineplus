import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const IntroLayout = () => {
	return (
		<motion.div
			className='intro-layout bg-shades-primary-400 text-white flex items-center justify-center'
			initial={{ y: '-100%' }}
			animate={{ y: '0' }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.3 }}
		>
			<div className='text-center'>
				<h1 className='font-bold text-2xl mb-2'>Welcome To Cineplus App.</h1>
				<p className='font-thin text-slate-400'>
					Here You Can Find Movies And Seriess From All diffrent Genres.
				</p>
				<Link
					to={'/top-rated'}
					className='px-4 py-2 rounded-md mt-4 w-fit mx-auto block transition-colors duration-500 bg-primary-800 hover:bg-primary-600'
				>
					Get Started
				</Link>
			</div>
		</motion.div>
	);
};

export default IntroLayout;
