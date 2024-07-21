import { useSuspenseQuery } from '@tanstack/react-query';
import { getMovieData } from '../utils/Functions';

const useMovieData = (movieID: string) => {
	return useSuspenseQuery({
		queryKey: ['movie_id', movieID],
		queryFn: () => getMovieData(movieID),
		retry: false,
	});
};

export default useMovieData;
