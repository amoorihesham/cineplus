import { useSuspenseQuery } from '@tanstack/react-query';
import { getTrending } from '../utils/Functions';

const useGetTrending = () => {
	return useSuspenseQuery({
		queryKey: ['Trending-this-week'],
		queryFn: getTrending,
	});
};

export default useGetTrending;
