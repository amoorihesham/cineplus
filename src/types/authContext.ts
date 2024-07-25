import { User as firebaseUser } from 'firebase/auth'
export type authContextType = {
    user: firebaseUser | undefined,
    signIn: () => void;
    logOut: () => void;
}

