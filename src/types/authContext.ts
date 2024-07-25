import { User as firebaseUser } from 'firebase/auth'
export type authContextType = {
    user: firebaseUser,
    signIn: () => void;
    logOut: () => void;
}

