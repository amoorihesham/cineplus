import React, { createContext, useEffect, useState } from 'react';
import { signInWithPopup, signOut, User as firebaseUser } from 'firebase/auth';
import { authContextType } from '../types';
import { auth, googleProvider } from '../config/firebase';

export const AuthContext = createContext<authContextType | null>(null);

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<firebaseUser>();

	const signIn = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (error) {
			console.log(error);
		}
	};
	const logOut = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(auth.currentUser as firebaseUser);
			} else {
				setUser(auth.currentUser as firebaseUser);
			}
		});

		return () => unsubscribe();
	}, []);

	return <AuthContext.Provider value={{ user, signIn, logOut }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
