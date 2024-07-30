// import RouterProviderComponent from './utils/AppRouter';
import './App.css';
import { lazy } from 'react';

const RouterProviderComponent = lazy(() => import('./utils/AppRouter'));
function App() {
	return <RouterProviderComponent />;
}

export default App;
