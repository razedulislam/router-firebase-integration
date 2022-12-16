import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase.init";
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app);
    const googleProviders = new GoogleAuthProvider();
    //When user state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, []);
    const handleSignIn = () => {
        signInWithPopup(auth, googleProviders).then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
        });
    };

    // signout from google
    const handleSignOut = () => {
        signOut(auth).then(() => {});
    };

    return { user, handleSignIn, handleSignOut };
};
export default useFirebase;
