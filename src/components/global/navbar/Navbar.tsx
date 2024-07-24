import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, ThemeContext } from '../../../context';
import { authContextType } from '../../../types';
import { dropdownToggle } from './functions';
import {
	ArrowDownIcon,
	ArrowLeftEndOnRectangleIcon,
	ArrowRightEndOnRectangleIcon,
	HomeIcon,
	PhotoIcon,
	TagIcon,
	UserCircleIcon,
} from '@heroicons/react/16/solid';

import logo from '../../../assets/logo.png';

const Navbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { user, signIn, logOut } = useContext(AuthContext) as authContextType;
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	return (
		<nav className='bg-slate-300 border-gray-200 dark:bg-navy'>
			<div className='container'>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4'>
					<Link to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
						<img src={logo} className='h-8' alt='Flowbite Logo' />
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
							Cineplus
						</span>
					</Link>

					<ul className='hidden md:flex md:flex-row font-medium items-center md:space-x-8 rtl:space-x-reverse text-black dark:text-white'>
						<li>
							<Link
								to='/top-rated'
								className='flex items-center justify-center hover:text-purple transition-colors duration-300'
								aria-current='page'
							>
								<HomeIcon className='h-6' /> Top Rated
							</Link>
						</li>
						<li>
							<Link
								to='/popular'
								className='flex items-center justify-center  hover:text-purple transition-colors duration-300'
								aria-current='page'
							>
								<TagIcon className='h-6' />
								Popular
							</Link>
						</li>
						<li>
							<Link
								to='/series'
								className='flex items-center justify-center hover:text-purple transition-colors duration-300'
								aria-current='page'
							>
								<PhotoIcon className='h-6' />
								Series
							</Link>
						</li>

						<li className='relative'>
							<button
								id='dropdownAvatarNameButton'
								data-dropdown-toggle='dropdownAvatarName'
								className='flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full  md:me-0   dark:text-white hover:text-purple transition-colors duration-300'
								type='button'
								onClick={() => dropdownToggle(dropdownRef.current)}
							>
								<span className='sr-only'>Open user menu</span>
								<UserCircleIcon className='h-7 me-1' />
								<ArrowDownIcon className='h-3 me-0' />
								Guest User
							</button>

							<div
								id='dropdownAvatarName'
								className='z-10 hidden absolute -left-5 top-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
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

									<li className='px-4 hover:bg-gray-100 dark:hover:bg-gray-600 py-2'>
										<label className='inline-flex items-center cursor-pointer'>
											<span className='me-1 text-sm font-medium text-gray-900 dark:text-white'>
												Dark Mode
											</span>
											<input
												type='checkbox'
												value=''
												className='sr-only peer'
												onChange={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
												checked={theme === 'light' ? false : true}
											/>
											<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple dark:peer-focus:ring-purple rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple"></div>
										</label>
									</li>
								</ul>
								<div className='py-2 px-4'>
									{user ? (
										<button
											onClick={logOut}
											className='bg-red-500 hover:bg-red-400 transition-colors duration-300 px-2 py-2 text-white font-semibold text-sm rounded-md flex items-center gap-1 justify-center'
										>
											<ArrowRightEndOnRectangleIcon className='h-4' />
											Signout
										</button>
									) : (
										<button
											onClick={signIn}
											className='bg-blue-500 hover:bg-blue-400 transition-colors duration-300 px-2 py-2 text-white font-normal text-xs rounded-md flex items-center gap-1 justify-center'
										>
											<ArrowLeftEndOnRectangleIcon className='h-4' />
											Login With Google
										</button>
									)}
								</div>
							</div>
						</li>

						<li></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
