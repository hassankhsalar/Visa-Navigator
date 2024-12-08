import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    updateProfile 
} from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init'; 

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth).finally(() => setLoading(false));
    };

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); 
        });
        return () => unsubscribe();
    }, []);

    const userInfo = {
        user,
        loading,
        createUser,
        logInUser,
        signInWithGoogle,
        logOut: logOutUser, 
        updateProfile: (profile) => updateProfile(auth.currentUser, profile), 
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {( children )}
        </AuthContext.Provider>
    );
    
};

export default AuthProvider;
