import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../services/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [User, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

	function Signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
	}

    function Login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function Logout() {
        return signOut(auth);
    }

	return <AuthContext.Provider value={{User, Signup, Login, Logout, }}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
	return useContext(AuthContext);
}
