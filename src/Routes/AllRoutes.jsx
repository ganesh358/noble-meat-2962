import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";




export default function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>

                <Route/>

                <Route/>
                <Route/>
                <Route/>
                <Route/> 
                <Route/>
            </Routes>
        </div>
    )
}