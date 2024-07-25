import { memo } from 'react';
import { MovieCard, Spinner } from '../../';
import { IMovieType } from '../../../types';

const ListItterable = ({ list, sectionClass }: { list: IMovieType[]; sectionClass: string }) => {
	return (
		<div
			className={`${sectionClass} ${
				list.length === 0 ? 'block' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '
			} mt-5`}
		>
			{list.length <= 0 ? (
				<div className='w-full'>
					<h4 className='text-center text-white text-3xl font-semibold'>No Data To Show.</h4>
					<Spinner />
				</div>
			) : (
				list.map((item: IMovieType) => <MovieCard movie={item} key={item.id} />)
			)}
		</div>
	);
};

export default memo(ListItterable);
