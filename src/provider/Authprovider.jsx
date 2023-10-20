/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";

  export const AuthContext = createContext(null);

  const auth = getAuth(app);




const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)


    }

    const singIn = (email, password) => {
    
        return signInWithEmailAndPassword(auth,email,password)


}


    const logOut = () => {
        setLoading(true);
        return signOut(auth);

    }
    
    useEffect(() => {
        

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
    
            console.log('user in the auth', currentUser);

            setUser(currentUser);
            setLoading(false);

        });
        return () => {
    
            unSubscribe();

}


    } ,[])

    
    const authInfo = {
      user,
        createUser,
        singIn,
        logOut,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;