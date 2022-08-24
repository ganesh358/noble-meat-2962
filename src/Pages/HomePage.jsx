import { Text } from "@chakra-ui/react";
import { useState } from "react";
import Footor from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Navbar1 from "../Component/Navbar1";


function HomePage(){
    const [Change, setchange] = useState(false);
    const changeNavbar = () =>{
       if(window.scrollY >= 1){
         setchange(true);
       }
       else{
         setchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbar);

    return (
        <div>
            {Change? <Navbar1/> : <Navbar/>}
            {/* <Navbar /> */}
            {/* <Navbar1/> */}
            <Text fontSize='2xl'>hennllo</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>
            <Text fontSize='2xl'>hello</Text>

            <Text fontSize='2xl'>hello</Text>

             <Text fontSize='2xl'>hello</Text>
             <Text fontSize='2xl'>hello</Text>
             <Text fontSize='2xl'>hello</Text>
             <Footor/>
        </div>
    )
}

export default HomePage;