import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
	ArrowLeftEndOnRectangleIcon,
	ArrowRightEndOnRectangleIcon,
	ArrowTrendingUpIcon,
	FireIcon,
	Cog8ToothIcon,
	TvIcon,
} from '@heroicons/react/16/solid';
import { AuthContext } from '../../../context';
import { authContextType } from '../../../types';
import { dropdownToggle } from './functions';
import logo from '../../../assets/logo.png';

const Navbar = () => {
	const { user, signIn, logOut } = useContext(AuthContext) as authContextType;
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	return (
		<nav className='bg-shades-primary-600'>
			<div className='container'>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4'>
					<Link to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
						<img src={logo} className='h-8' alt='Cineplus Logo' />
						<span className='self-center text-2xl font-semibold whitespace-nowrap text-primary-100'>
							Cineplus
						</span>
					</Link>

					<ul className='hidden md:flex md:flex-row font-medium items-center md:space-x-8 rtl:space-x-reverse text-white group'>
						<li>
							<Link
								to='/top-rated'
								className='flex items-center justify-center transition-colors duration-300 group/item hover:text-primary-300'
								aria-current='page'
							>
								<ArrowTrendingUpIcon className='h-6' /> Top Rated
							</Link>
						</li>
						<li>
							<Link
								to='/popular'
								className='flex items-center justify-center  transition-colors duration-300 group/item hover:text-primary-300'
								aria-current='page'
							>
								<FireIcon className='h-6' />
								Popular
							</Link>
						</li>
						<li>
							<Link
								to='/series'
								className='flex items-center justify-center transition-colors duration-300 group/item hover:text-primary-300'
								aria-current='page'
							>
								<TvIcon className='h-6' />
								Series
							</Link>
						</li>
						<li className='relative'>
							<button
								id='dropdownAvatarNameButton'
								data-dropdown-toggle='dropdownAvatarName'
								className='flex items-center justify-center transition-colors duration-300 group/item hover:text-primary-300'
								type='button'
								onClick={() => dropdownToggle(dropdownRef.current)}
							>
								<Cog8ToothIcon className='h-6' />
								{user ? `${user.displayName}` : 'Guest User'}
							</button>

							<div
								id='dropdownAvatarName'
								className='z-10 hidden absolute  top-8 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 dark:divide-gray-600'
								ref={dropdownRef}
							>
								<ul
									className='py-2 text-sm text-gray-700 dark:text-gray-200'
									aria-labelledby='dropdownInformdropdownAvatarNameButtonationButton'
								>
									<li>
										<Link
											to={'/'}
											className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
										>
											Favorites
										</Link>
									</li>
								</ul>
								<div className='py-2 px-4'>
									{user ? (
										<button
											onClick={logOut}
											className='bg-red-500 hover:bg-red-400 transition-colors duration-300 px-2 py-2 text-white font-semibold text-sm rounded-md flex items-center gap-1 justify-center w-full'
										>
											<ArrowRightEndOnRectangleIcon className='h-4' />
											Signout
										</button>
									) : (
										<button
											onClick={signIn}
											className='bg-blue-500 hover:bg-blue-400 w-full transition-colors duration-300 px-2 py-2 text-white font-normal text-sm rounded-md flex items-center gap-1 justify-center'
										>
											<ArrowLeftEndOnRectangleIcon className='h-4' />
											Login
										</button>
									)}
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
