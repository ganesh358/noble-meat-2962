import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";

import ProductSuscribe from "../Pages/ProductSuscribe";
import SignUp from "../Pages/SignUp";




export default function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>

                <Route path="/login" element={<Login/>}/>

                <Route path="/create-account" element={<SignUp/>}/>
                <Route path="/products/subscribe" element={<ProductSuscribe/>}/>
                <Route path="/cart" element={<Cart/>}/>
               
                
            </Routes>
        </div>
    )
}