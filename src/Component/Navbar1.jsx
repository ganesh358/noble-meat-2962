import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";


function Navbar1(){
    return (
    
         <Flex bg='white' position='fixed'  boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' h='5rem' justifyContent='space-between' color='black'pl='1rem' pr='1rem'   pt='1.8rem' >
                 <Box  pt='0' pl='3'>
                     <Text fontSize='18px'fontWeight='700'>SUBSCRIBE NOW</Text>
                 </Box>
                 <Box h='2.8rem'>
                    <Link to='/'>
                      <Img  objectFit='cover' h='49px' src='https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_96ac9306-4c81-4ab8-8d2b-4e818eed7f76_2048x.png?v=1606482289' alt='fabbag'/>
                    </Link>
                 </Box>
                  <Box >
                    
                    <Flex pr='5' gap='1rem' fontSize='1.2rem' pt='0'>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <ion-icon name="cart-outline"></ion-icon>
                 </Flex> 
                 </Box>
         </Flex> 
      
    )
}

export default Navbar1;