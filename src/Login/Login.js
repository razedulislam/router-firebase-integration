import React from "react";
import useFirebase from "../hooks/useFirebase";
import "./Login.css";

const Login = () => {
    //custom hook use kora hoyehce useFirebase
    const { handleSignIn, handleSignOut } = useFirebase();
    return (
        <div>
            <h2 className="login-header">Please Login</h2>

            <button onClick={handleSignIn}>Login with google</button>
            <br />
            <input type="email" name="" placeholder="Enter Email" id="" />
            <br />
            <input type="password" name="" placeholder="Enter Password" id="" />
            <br />
            <input type="submit" value="Login" />
        </div>
    );
};

export default Login;
