import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<div className='min-h-screen flex justify-center container py-pageYpadding'>
				<Outlet></Outlet>
			</div>
			<Footer />
		</>
	);
};

export default MainLayout;
