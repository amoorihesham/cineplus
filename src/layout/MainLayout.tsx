import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet></Outlet>
		</>
	);
};

export default MainLayout;
