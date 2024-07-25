import { User as firebaseUser } from 'firebase/auth'
import { addDoc, collection, doc, getDocs, limit, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebase";
import { IMovieSchema } from "./shemas";


export const addToFavorite = async (logedUser: firebaseUser, docData: IMovieSchema) => {
    const q = query(collection(db, 'favorites'), where('userId', '==', logedUser?.uid), limit(1));
    const snapShot = await getDocs(q);
    if (snapShot.empty) {
        await addDoc(collection(db, 'favorites'), {
            userId: logedUser?.uid,
            movies: [
                {
                    id: docData.id,
                    title: docData.title,
                    overview: docData.overview,
                    backdrop_path: docData.backdrop_path,
                },
            ],
        });
    } else {
        const currentDocs: IMovieSchema[] = []
        let docID: any;
        snapShot.forEach(doc => {
            currentDocs.push(...doc.data().movies);
            docID = doc.id

        });

        const isExist = currentDocs.find(doc => doc.id === docData.id)

        if (isExist) {
            return
        } else {
            const docRef = doc(db, 'favorites', docID)
            await updateDoc(docRef, {
                userId: logedUser?.uid,
                movies: [...currentDocs, { title: docData.title, overview: docData.overview, backdrop_path: docData.backdrop_path, id: docData.id }]
            })

        }



    }
};



