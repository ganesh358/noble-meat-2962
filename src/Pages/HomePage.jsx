import { Box, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import Footor from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Navbar1 from "../Component/Navbar1";
import Slidersecond from "../components1/Slider/SecondSlider/Slidersec";
import Slider from "../components1/Slider/Slider"


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
           <Box > {Change? <Navbar1/> : <Navbar/>}</Box>
          <Box > <Slider/> </Box>
          
          <Text mt='2rem' fontWeight='400'  color='#222222' textAlign='center' fontSize='4xl'>WHAT'S IN THE BAG</Text>
          <Box border='1px solid #e5b95f' w='22rem' ml='31rem' mt='1rem'> </Box> 
          <Box> 
            <Slidersecond/>
          </Box>
          <Text mt='3rem' fontWeight='400'  color='#222222' textAlign='center' fontSize='4xl'>SUBSCRIPTION</Text>
          <Box border='1px solid #e5b95f' w='18rem' ml='33rem' mt='.5rem'> </Box> 
           
           <Grid  ml='21rem' mt='2.5rem' h='31rem' w='19.5rem'>
               <Box   h='5.9rem' border='1px solid grey' ></Box>
               <Box h='5.1rem' border='1px solid grey'>2</Box>
               <Box h='15.5rem' border='1px solid grey'>3</Box>
               <Box h='4.5rem' border='1px solid grey'>4</Box>
           </Grid>
                

           <Text mt='8rem' fontWeight='400'  color='#222222' textAlign='center' fontSize='4xl'>PREVIOUS BAGS</Text>
          <Box border='1px solid #e5b95f' w='18rem' ml='33rem' mt='.6rem'> </Box> 

             <Footor/>
        </div>
    )
}

export default HomePage;