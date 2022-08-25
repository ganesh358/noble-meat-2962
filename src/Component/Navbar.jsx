import { Box, Flex, Img, Input, Text, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,

    ModalFooter,
    ModalBody,
    ModalCloseButton,
 

  } from '@chakra-ui/react'


function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
    
    return (
    
         <Flex bg='white'  overflow='hidden'  boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' w='100%' justifyContent='space-between' color='#e5b95f'  p='.7rem' >
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
                    <Box >
                   

                <Modal onClose={onClose} size='wide'  mt='-2rem' isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
 
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight='500' color='#7d7d7d' fontSize='.6rem'>WHAT ARE YOU LOOKING FOR?</Text>
                        <Flex> <Input focusBorderColor='white'  h='5rem' border='none' mt='2rem' fontSize='2.5rem' color='black' _placeholder={{color:"black"}} placeholder="search product"  /><Box fontSize='1.5rem' ml='-2rem' pt='4rem' ><ion-icon  name="search-outline"></ion-icon></Box></Flex>
                      
                         <Box border='1px solid black'></Box>
                    </ModalBody>
                    <ModalFooter>
                  
                    </ModalFooter>
                    </ModalContent>
                    </Modal>
                    </Box>
                    <ion-icon  key={size}  onClick={() => handleSizeClick(size)} name="search-outline"></ion-icon>
                    <ion-icon name="heart-outline">

                    </ion-icon>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <ion-icon name="cart-outline"></ion-icon>
                 </Flex> 
                 </Box>
         </Flex> 
      
    )
}

export default Navbar;