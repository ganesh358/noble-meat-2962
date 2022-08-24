import { Box, Button, Flex, Grid, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Footor(){
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering5, setIsHovering5] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    const handleMouseEnter1 = () => {
        setIsHovering1(true);
      };
    
      const handleMouseLeave1 = () => {
        setIsHovering1(false);
      };
      const handleMouseEnter2 = () => {
        setIsHovering2(true);
      };
    
      const handleMouseLeave2 = () => {
        setIsHovering2(false);
      };
      const handleMouseEnter3 = () => {
        setIsHovering3(true);
      };
    
      const handleMouseLeave3 = () => {
        setIsHovering3(false);
      };
      const handleMouseEnter5 = () => {
        setIsHovering5(true);
      };
    
      const handleMouseLeave5 = () => {
        setIsHovering5(false);
      };
    return (
        <Grid>

        <Flex  h='26.5rem' w='100%' textAlign='center' gap='8rem'>
             <Box  w='30%'  mt='5rem'>
                  <Text fontSize='17px' ml='-2' fontWeight='500' color='#222222'>INFORMATION</Text>
                <Grid textAlign='left' ml='6.5rem' lineHeight='2rem' fontWeight='500' color='#7d7d7d' fontSize='15px'>
                  <Link  to='/'>About Us</Link>
                  <Link to='/' >Associated Brands</Link>
                  <Link to='/'>Associated Brands</Link>
                  <Link to='/'>FAQ</Link>
                  <Link to='/'>Collaborate with Fab Bag</Link>
                  <Link to='/'>Contact Us</Link>
                  <Link to='/'>Returns  Refunds</Link>
                  <Link to='/'>Terms  Conditions</Link>
                  <Link to='/'>Privacy Policy</Link>
                  </Grid>
             </Box>
             <Box textAlign='left'  w='28%'  mt='5rem' >
                  <Text  fontSize='17px' fontWeight='500' color='#222222'>CUSTOMER CARE</Text>
                  <Text   fontWeight='500' color='#7d7d7d' fontSize='15px' mt='2' display='flex'>Call : <Text color='#222222' fontWeight='600'>022-6805-6010</Text> </Text>
                  <Text   fontWeight='500' color='#7d7d7d' fontSize='15px' >(Monday to Friday : 9 AM - 7 PM).</Text>
                  <Text   fontWeight='500' color='#7d7d7d' fontSize='15px' mt='3'>Mail : crew@fabbag.com</Text>
             </Box>
             <Box textAlign='left'  w='40%'  mt='5rem' lineHeight='2.5rem'>
             <Text mt='-2' fontSize='17px' fontWeight='500' color='#222222'>NEWSLETTER</Text>
             <Text fontSize='13px' color='#7d7d7d' fontWeight='500'>Signup for the latest offers, updates and news</Text>
             <Flex gap='4' w='21rem' mt='3'> <Input focusBorderColor='#e5b95f' border='none' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' ml='-1' pl='-2' fontSize='13px' placeholder="Your email address"/>
             <Button style={{ backgroundColor: isHovering5 ? 'black' : '#e5b95f',}} onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}    bg='#e5b95f' color='white' w='10rem' fontSize='13px'>SUBSCRIBE</Button></Flex>
              <Text fontSize='13px' mt='3' color='#7d7d7d' fontWeight='500'>Don’t worry we don’t spam</Text>
             </Box>
        </Flex>
        
         <Box h='4rem' display='flex' alignItems='center' justifyContent='center' gap='2'>
             <div className="Foot" style={{
                // backgroundColor:"#E8E8E8",
                paddingLeft:"1rem",
                paddingTop:".4rem",
                height:'2.4rem',
                fontWeight:"500",
                width:"2.4rem",
                borderRadius:"2rem",
                backgroundColor: isHovering ? '#0046be' : '#E8E8E8',
                color: isHovering ? 'white' : '#222222',
             }}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             >f</div>
             <div style={{
                height:'2.4rem',
                width:"2.4rem",
                borderRadius:"2rem",
                paddingLeft:".8rem",
                paddingTop:".5rem",
                backgroundColor: isHovering1 ? 'skyblue' : '#E8E8E8',
                color: isHovering1 ? 'white' : '#222222',
             }}
             onMouseEnter={handleMouseEnter1}
             onMouseLeave={handleMouseLeave1}
             ><ion-icon name="logo-twitter"></ion-icon></div>
             <div style={{
                borderRadius:"2rem",
                paddingLeft:".7rem",
                paddingTop:".5rem",
                width:"2.4rem",
                height:'2.4rem',
                backgroundColor: isHovering2 ? '#d53f72' : '#E8E8E8',
                color: isHovering2 ? 'white' : '#222222',
             }}
             onMouseEnter={handleMouseEnter2}
             onMouseLeave={handleMouseLeave2}><ion-icon name="logo-instagram"></ion-icon></div>
             <div id='foot' style={{
                borderRadius:"2rem",
                height:'2.4rem',
                width:"2.4rem",
                paddingLeft:".7rem",
                paddingTop:".5rem",
                backgroundColor: isHovering3 ? 'red' : '#E8E8E8',
                color: isHovering3 ? 'white' : '#222222',
             }}
             onMouseEnter={handleMouseEnter3}
             onMouseLeave={handleMouseLeave3}><ion-icon name="logo-youtube"></ion-icon></div>

         </Box>
         <Text pb='10' color='#7d7d7d' ml='31rem' fontSize='1rem' fontWeight="500">Copyright © 2021 fabbag.com All rights reserved.</Text>
         
         
         </Grid>
    )
}