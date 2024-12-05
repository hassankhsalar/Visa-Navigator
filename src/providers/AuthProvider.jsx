import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.init';


export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userInfo = {

        user,
        loading,
        createUser

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;