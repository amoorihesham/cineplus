import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	ArrowLeftEndOnRectangleIcon,
	ArrowRightEndOnRectangleIcon,
	HomeIcon,
	PhotoIcon,
	TagIcon,
} from '@heroicons/react/16/solid';
import logo from '../../../assets/logo.png';

import { AuthContext, ThemeContext } from '../../../context';
import { authContextType } from '../../../types';

const Navbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { user, signIn, logOut } = useContext(AuthContext) as authContextType;

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
						{user ? (
							<button
								onClick={logOut}
								className='bg-red-500 hover:bg-red-400 transition-colors duration-300 px-2 py-1 text-white font-semibold text-sm rounded-md flex items-center gap-1 justify-center'
							>
								<ArrowRightEndOnRectangleIcon className='h-4' />
								Signout
							</button>
						) : (
							<button
								onClick={signIn}
								className='bg-blue-500 hover:bg-blue-400 transition-colors duration-300 px-2 py-1 text-white font-semibold text-sm rounded-md flex items-center gap-1 justify-center'
							>
								<ArrowLeftEndOnRectangleIcon className='h-4' />
								Google Login
							</button>
						)}
						<li>
							<label className='inline-flex items-center cursor-pointer'>
								<input
									type='checkbox'
									value=''
									className='sr-only peer'
									onChange={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
									checked={theme === 'light' ? false : true}
								/>
								<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple dark:peer-focus:ring-purple rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple"></div>
								<span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
									Dark Mode
								</span>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
