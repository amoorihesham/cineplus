import { useSuspenseQuery } from '@tanstack/react-query';
import { getPopular } from '../utils/Functions';

const useGetPopular = (pageNumber: number) => {
	return useSuspenseQuery({
		queryKey: ['popular', `page-${pageNumber}`],
		queryFn: () => getPopular(pageNumber),
		retry: false,
	});
};

export default useGetPopular;
