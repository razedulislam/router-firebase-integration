import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "../firebase.init";
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app);
    const googleProviders = new GoogleAuthProvider();
    const handleSignIn = () => {
        signInWithPopup(auth, googleProviders).then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
        });
    };

    return { user, handleSignIn };
};
export default useFirebase;
