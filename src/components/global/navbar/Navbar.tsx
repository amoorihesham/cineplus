import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../../context/ThemeContext';
import { HomeIcon, PhotoIcon, TagIcon } from '@heroicons/react/16/solid';
import logo from '../../../assets/logo.png';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../../../config/firebase';

const Navbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	const signInBTN = async () => {
		try {
			const data = await signInWithPopup(auth, googleProvider);
			console.log(data.user);
		} catch (error) {
			console.log(error);
		}
	};
	const signOutBTN = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
		}
	};

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
								to='/'
								className='flex items-center justify-center hover:text-purple transition-colors duration-300'
								aria-current='page'
							>
								<HomeIcon className='h-6' /> Home
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
						<li>
							{auth?.currentUser ? (
								<button
									className='bg-primary-900 text-white px-2 py-1 rounded-lg font-semiBold text-sm hover:bg-primary-100'
									onClick={signOutBTN}
								>
									Sign Out
								</button>
							) : (
								<button
									className='bg-primary-900 text-white px-2 py-1 rounded-lg font-semiBold text-sm hover:bg-primary-100'
									onClick={signInBTN}
								>
									Sign In
								</button>
							)}
						</li>
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
