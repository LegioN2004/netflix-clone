import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
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
		createUserWithEmailAndPassword(auth, email, password);
		setDoc(doc(db, 'users', email), {
			favShows: [],
		});
	}

	function Login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function Logout() {
		return signOut(auth);
	}

	return (
		<AuthContext.Provider value={{ User, Signup, Login, Logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function UserAuth() {
	return useContext(AuthContext);
}
