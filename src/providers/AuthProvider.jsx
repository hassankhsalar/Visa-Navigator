import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    updateProfile 
} from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init'; // Ensure this path is correct

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Log In User
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log In with Google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Log Out User
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth).finally(() => setLoading(false));
    };

    // Observe Auth State Changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Loading is false once we determine the user's state
        });
        return () => unsubscribe();
    }, []);

    const userInfo = {
        user,
        loading,
        createUser,
        logInUser,
        signInWithGoogle,
        logOut: logOutUser, // Change to logOut for consistency
        updateProfile: (profile) => updateProfile(auth.currentUser, profile), // Optional, if you want profile update in context
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {loading ? <div>Loading...</div> : children} {/* Optional loader */}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
