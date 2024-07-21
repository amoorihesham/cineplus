import { useSuspenseQuery } from '@tanstack/react-query';
import { getTopRated } from '../utils/Functions';

const useTopRated = (pageNumber: number) => {
	return useSuspenseQuery({
		queryKey: ['topRated', pageNumber],
		queryFn: () => getTopRated(pageNumber),
		retry: false,
	});
};

export default useTopRated;
