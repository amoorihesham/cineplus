import { Outlet } from 'react-router-dom';
import { Footer, Navigation } from '../components';

const MainLayout = () => {
	return (
		<>
			<Navigation />
			<div className='min-h-screen  container py-pageYpadding'>
				<Outlet></Outlet>
			</div>
			<Footer />
		</>
	);
};

export default MainLayout;
