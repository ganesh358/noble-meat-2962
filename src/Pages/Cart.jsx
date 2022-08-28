import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import Footor from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Navbar1 from "../Component/Navbar1";




export default function Cart(){
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
             <Box > {Change? <Navbar1/> : <Navbar/>}</Box>
             <Box h='25rem' pl='7rem' lineHeight='7rem'>

             <Text fontSize='3xl'>My Cart</Text>
             <Text fontSize='3xl'>Your cart is empty!!</Text>
             </Box>
            
          
            <Footor/>
        </div>
    )
}