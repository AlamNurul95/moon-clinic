import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
                console.log(currentUser);
                setUser(currentUser);
                setLoading(false);
             
        });
        return unsubscribe();
    },[])
    
    const providerLogin=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
        
    }
    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authInfo={user,providerLogin,logOut,loading,createUser,signIn,setLoading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;