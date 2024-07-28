import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='bg-shades-primary-500 shadow-2xl shadow-shades-primary-400 py-5'>
			<div className='container'>
				<div className='mx-auto w-full max-w-screen-xl '>
					<div className='flex justify-between flex-col lg:flex-row'>
						<div className='mb-6 md:mb-0'>
							<Link to='/' className='flex items-center'>
								<img src='/favicon.ico' className='h-8 me-3' alt='FlowBite Logo' />
								<span className='self-center text-2xl font-semibold whitespace-nowrap text-primary-100'>
									Cineplus
								</span>
							</Link>
						</div>
						<div className='grid grid-cols-2  text-primary-100 mt-5 lg:mt-0'>
							<div>
								<h2 className='mb-6 text-sm font-semibold'>Build With</h2>
								<ul className='text-primary-300 font-medium'>
									<li className='mb-4'>
										<a href='https://react.dev/' className='hover:underline'>
											React
										</a>
									</li>
									<li>
										<a href='https://tailwindcss.com/' className='hover:underline'>
											Tailwind CSS
										</a>
									</li>
								</ul>
							</div>

							<div>
								<h2 className='mb-6 text-sm font-semibold'>Legal</h2>
								<ul className='text-primary-300 font-medium'>
									<li className='mb-4'>
										<a href='#' className='hover:underline'>
											Privacy Policy
										</a>
									</li>
									<li>
										<a href='#' className='hover:underline'>
											Terms &amp; Conditions
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<hr className='my-6 border-secondry-900 sm:mx-auto lg:my-8' />
					<div className='sm:flex sm:items-center sm:justify-between'>
						<span className='text-sm text-primary-300'>
							© 2023{' '}
							<a href='https://flowbite.com/' className='hover:underline'>
								Cineplus™
							</a>
							. All Rights Reserved.
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
