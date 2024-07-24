import { User as firebaseUser } from 'firebase/auth'
export type authContextType = {
    user: firebaseUser | null,
    signIn: () => void;
    logOut: () => void;
}

