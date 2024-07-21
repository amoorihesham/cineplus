import { ListItterable } from '../components';
import useTopRated from '../hooks/useTopRated';

const Home = () => {
	const {
		data: { data },

		error,
		isError,
	} = useTopRated(1);

	if (isError) {
		return <h1>{error?.message}</h1>;
	}

	return (
		<div className='h-full container py-pageYpadding'>
			<p className='text-center mb-8 bg-primary-100 w-fit m-auto py-1 px-3 rounded-lg text-white capitalize'>
				this 20 movie top rated of all the time.
			</p>
			<ListItterable list={data.results} sectionClass='movies-list' />
		</div>
	);
};

export default Home;
