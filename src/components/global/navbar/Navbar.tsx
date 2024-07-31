import { useContext } from 'react';
import {
	Avatar,
	Dropdown,
	DropdownDivider,
	DropdownHeader,
	DropdownItem,
	Navbar,
	NavbarCollapse,
	NavbarToggle,
} from 'flowbite-react';
import { AuthContext } from '../../../context';
import { authContextType } from '../../../types';
import logo from '../../../assets/logo.png';
import * as navStyle from './style.json';
import { Link } from 'react-router-dom';

const Navigation = () => {
	const { user, signIn, logOut } = useContext(AuthContext) as authContextType;

	return (
		<Navbar theme={navStyle}>
			<Link to='/' className='flex items-center'>
				<img src={logo} className='mr-1 h-6 sm:h-9' alt='Cineplus App Logo' />
				<span className='self-center whitespace-nowrap text-xl font-semibold text-white'>
					Cineplus
				</span>
			</Link>
			<div className='flex md:order-2'>
				<Dropdown
					arrowIcon={false}
					inline
					label={
						<Avatar
							alt='User settings'
							img={
								user != null
									? user?.photoURL
									: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
							}
							rounded={false}
							status='online'
							statusPosition='top-right'
							stacked={true}
							size='sm'
						/>
					}
				>
					<DropdownHeader>
						<span className='block text-sm'>{user ? user.displayName : 'Geust User'}</span>
						<span className='block truncate text-sm font-medium'>{user && user.email}</span>
					</DropdownHeader>
					{user && (
						<Link to={'/favorites'} className='px-4'>
							Favorites
						</Link>
					)}
					<DropdownDivider />
					{user ? (
						<DropdownItem onClick={logOut}>Sign out</DropdownItem>
					) : (
						<DropdownItem onClick={signIn}>Sign In</DropdownItem>
					)}
				</Dropdown>
				<NavbarToggle />
			</div>
			<NavbarCollapse>
				<Link
					to={'/top-rated'}
					className='text-white hover:text-primary-700 transition-colors duration-300'
				>
					Top Rated
				</Link>
				<Link
					to={'/popular'}
					className='text-white hover:text-primary-700 transition-colors duration-300'
				>
					Popular
				</Link>
				<Link
					to={'/series'}
					className='text-white hover:text-primary-700 transition-colors duration-300'
				>
					Series
				</Link>
				<Link
					to={'/search'}
					className='text-white hover:text-primary-700 transition-colors duration-300'
				>
					Search
				</Link>
			</NavbarCollapse>
		</Navbar>
	);
};

export default Navigation;
