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
        return signInWithPopup(auth,provider);
    }
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        return signOut(auth);
    }
    const authInfo={user,providerLogin,logOut,loading,createUser,signIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;