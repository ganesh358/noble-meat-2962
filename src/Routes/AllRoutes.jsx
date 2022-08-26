import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";




export default function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>

                <Route path="/login" element={<Login/>}/>

                <Route/>
                <Route/>
                <Route/>
                <Route/> 
                <Route/>
            </Routes>
        </div>
    )
}