import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";
const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <>
            <div className="header">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/register">Register</Link>
                    {/* Cannot read properties of null so use optional chaining  */}
                    <span>{user?.displayName && user.displayName}</span>
                    {/* considional rendering  */}
                    {/* optional chaining with user?.id otherwise null property found  */}
                    {user?.uid ? <button onClick={() => handleSignOut(user)}>Sign Out</button> : <Link to="/login">Login</Link>}
                </nav>
            </div>
        </>
    );
};

export default Header;
