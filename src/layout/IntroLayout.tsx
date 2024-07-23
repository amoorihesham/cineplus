import { Link } from 'react-router-dom';

const IntroLayout = () => {
	return (
		<div className='intro-layout bg-primary-900 text-white flex items-center justify-center'>
			<div className='text-center'>
				<h1 className='font-bold text-2xl mb-2'>Welcome To Cineplus App.</h1>
				<p className='font-thin text-slate-400'>
					Here You Can Find Movies And Seriess From All diffrent Genres.
				</p>
				<Link
					to={'/top-rated'}
					className='bg-lightNavy p-1 rounded-md mt-3 w-fit mx-auto block hover:bg-navy transition-colors duration-500'
				>
					Get Started
				</Link>
			</div>
		</div>
	);
};

export default IntroLayout;
