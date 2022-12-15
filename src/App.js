import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./Login/Login";
import Products from "./components/Products/Products";
import Orders from "./components/Orders/Orders";
import Reviews from "./components/Reviews/Reviews";
import Register from "./components/Register/Register";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/Orders" element={<Orders />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
