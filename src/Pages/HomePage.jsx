import { Box, Button, Flex, Grid, Img, Text } from "@chakra-ui/react";
import { useState } from "react";

import Footor from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Navbar1 from "../Component/Navbar1";
import Sliderfifth from "../components1/FithSlider/FithSlider";
import SliderFouth from "../components1/Slider/FourthSlider/SliderFourth";
import Slidersecond from "../components1/Slider/SecondSlider/Slidersec";
import Slider from "../components1/Slider/Slider"
import Sliderthird from "../components1/Slider/ThirdSlider/Slidersec";


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
               <Box lineHeight='22px' textAlign='center'  h='5.9rem' border='1px solid #E8E8E8' >
                <Text mt='4' fontWeight='500' fontSize='xl'>1 MONTH</Text>
                <Text fontSize='sm'>SUBSCRIPTION</Text>
               </Box>
               <Box lineHeight='22px' textAlign='center' h='5.1rem' border='1px solid #E8E8E8'>
               <Text mt='4' fontWeight='600' fontSize='xl'>Rs. 599.00</Text>
                <Text fontSize='sm'>/ per month</Text>
               </Box>
               <Box  lineHeight='8px' textAlign='center' h='15.5rem' border='1px solid #E8E8E8'>
                <Text mt='1rem' fontWeight='500' color='#e5b95f' fontSize='sm'>ONE TIME PAYMENT</Text>
                <Text  mt='4' fontWeight='600' fontSize='xl'>Rs. 599.00</Text>
               </Box>
               <Box textAlign='center' bg='#e5b95f' h='4.5rem' >
                  <Button mt='4' w='17rem' h='2.3rem' _hover={{ bg: "#e5b95f", color: "black" }} color='white' border='1px solid white' bg='#e5b95f'>ADD TO CART</Button>
               </Box>
           </Grid>
                

           <Text mt='8rem' fontWeight='400'  color='#222222' textAlign='center' fontSize='4xl'>PREVIOUS BAGS</Text>
          <Box border='1px solid #e5b95f' w='18rem' ml='33rem' mt='.6rem'> </Box> 
          <Box mt='4rem'>
                <SliderFouth/>
              </Box>
              <Box mt='4rem'>

                <Sliderthird/>
              </Box>
              <Text mt='2rem' textAlign='center' fontSize='xl'>#TRENDINGNOW AT THE GOSSIP CORNER</Text>
               <Box w='100%' mt='2rem' >
                   <Flex h='10.5rem' w='100%'>
                   
                      <Img w='12rem'  src='https://scontent.cdninstagram.com/v/t51.2885-15/301251006_410879834475726_5857604691535229497_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=iN47X5DWz-YAX_jM0Uk&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-5sBFkSrtknLNDKtLGjuA_qdNeTXP8UrLGJj6uRHDKrA&oe=630E0185'/>
                      <Img src='https://scontent.cdninstagram.com/v/t51.2885-15/300780300_415744050426506_996902418346204214_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=lpzvAOdZRu8AX_cDygJ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8cScU-HlN7pytnWaCfkG7oA35KvQfBmGfUtnxc2JnMKw&oe=630E1FD2'/>
                      <Img src='https://scontent.cdninstagram.com/v/t51.2885-15/300963745_607450630733202_2348629814306894776_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=lLhuCKYx4MUAX-xb8s3&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8KKOyyDOMH8_d1tW0JGiZCcJM-w4nLZBxPN4Zdkf29RA&oe=630DA22A'/>
                      <Img w='12rem' src='https://scontent.cdninstagram.com/v/t51.2885-15/300607305_439671718118461_4432863810807927384_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=gecelEqb3ZAAX8tyffa&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9fSzLCwxR4uXkMWxTxr_OEM-Xo3jBvHbTGt7ZcjTbHOA&oe=630DA5C0'/>
                      <Img src='https://scontent.cdninstagram.com/v/t51.2885-15/300787728_1508333222958543_5133547163213452562_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=IFgAzI2gBBwAX_Dwool&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9FrW638E7fGNXY1d_yC0iak2XT3dJRrdDBf35AXryqew&oe=630CCA3C'/>
                      <Img src='https://scontent.cdninstagram.com/v/t51.2885-15/300196770_424213902873071_7507176141267684495_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=QZ3XnLUnMN0AX8xotdB&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9fMwGMDC-nEFrpEZy_VE_CoXTyZ9QSMZmr_8KYNMLHuA&oe=630DB377'/>
                      <Img src='https://scontent.cdninstagram.com/v/t51.2885-15/300164026_148218927849084_5236340658953714989_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=dKP6eOk98hwAX-tT3sG&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8wPvd6TbsDofZkrH1gWKZdZ-Zzzg6k_FEk7ecs44bOTA&oe=630D3E7F'/>
                      <Img src='https://scontent.cdninstagram.com/v/t51.2885-15/300284208_614605400408686_869576934358723908_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=JMfZLEMXMqMAX_H8Ahp&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8-ZvmHeywiDzFFI6GPiEPuybafmgtjhxIKSVJ_NEKJ3Q&oe=630C4B26'/>
                      
                   </Flex>
               </Box>
               <Box>
                <Sliderfifth/>
               </Box>
             <Footor/>
        </div>
    )
}

export default HomePage;