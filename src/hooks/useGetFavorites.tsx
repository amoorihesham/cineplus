import { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { AuthContext } from '../context';
import { authContextType } from '../types';
import { IMovie } from './hooks-types/useGetFavorites';

const useGetFavorites = () => {
	const { user } = useContext(AuthContext) as authContextType;
	const [movies, setMovies] = useState<IMovie[] | []>([]);

	const getFavorites = async () => {
		if (user) {
			try {
				const q = query(collection(db, 'favorites'), where('userId', '==', user.uid));
				const snapShot = await getDocs(q);
				const newData: IMovie[] = [];
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
