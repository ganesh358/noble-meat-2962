import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Navbar(){
    return (
    
         <Flex bg='white'  boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' justifyContent='space-between' color='#e5b95f'  p='.7rem' >
                 <Box  pt='3' pl='3'>
                     <Text fontSize='18px'fontWeight='700'>SUBSCRIBE NOW</Text>
                 </Box>
                 <Box >
                    <Link to='/'>
                      <Img objectFit='cover' h='49px' src='https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO-Printing1_6350cdb4-8c03-49a8-bd2e-c8df50c83b37_2048x.png?v=1660282958' alt='fabbag'/>
                      </Link>
                 </Box>
                  <Box >
                    
                    <Flex pr='5' gap='1rem' fontSize='1.2rem' pt='3'>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <ion-icon name="cart-outline"></ion-icon>
                 </Flex> 
                 </Box>
         </Flex> 
      
    )
}

export default Navbar;