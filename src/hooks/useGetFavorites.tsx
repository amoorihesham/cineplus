import { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { AuthContext } from '../context';
import { authContextType, IMovieType } from '../types';

const useGetFavorites = () => {
	const { user } = useContext(AuthContext) as authContextType;
	const [movies, setMovies] = useState<IMovieType[] | []>([]);

	const getFavorites = async () => {
		if (user) {
			try {
				const q = query(collection(db, 'favorites'), where('userId', '==', user.uid));
				const snapShot = await getDocs(q);
				const newData: IMovieType[] = [];
				snapShot.forEach((doc) => {
					newData.push(...doc.data().movies);
				});
				setMovies(newData);
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		getFavorites();
	}, [user]);

	return movies;
};

export default useGetFavorites;
