import { Box, Button, Grid, Img, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";
import Footor from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Navbar1 from "../Component/Navbar1";




export default function ProductSuscribe(){
    const [Change, setchange] = useState(false);
    const [count,setCount] = useState(1)
    const changeNavbar = () =>{
       if(window.scrollY >= 1){
         setchange(true);
       }
       else{
         setchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbar);


    const [isHover, setIsHover] = useState(false);

    const handleEnter = () => {
      setIsHover(true);
    };
  
    const handleLeave = () => {
      setIsHover(false);
    };
    return (
        <div>
              <Box > {Change? <Navbar1/> : <Navbar/>}</Box>
               <Box  h='85rem'>

                <Box display='flex'  h='32rem'>
                    <Box  w='42%' h='32rem'>
                        <Img boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' mt='4.5rem' ml='6.3rem' w='82%' src='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3opt.gif?v=1661148586' alt='Women_sPage-Skincare-Reveal'/>
                        <Img boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'  ml='6.3rem' w='7rem' mixBlendMode='multiply' src='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3opt.gif?v=1661148586' alt='Women_sPage-Skincare-Reveal'/>
                    </Box>
                    <Box pl='2rem'  w='58%' h='32rem'>
                        <Text mt='4.4rem'>Home</Text>
                        <Text fontWeight='400' fontSize='2.2rem'>The Own 8 All August Fab Bag</Text>
                        <Text mt='2rem ' fontWeight='600' fontSize='2rem'>Rs. 599.00</Text>
                        <Text mt='2rem'>We appreci-EIGHT your love and hence we've decided to treat you with 8 unbeatable... </Text>
                        <Box color='grey' mt='1.6rem' bg='none' cursor='pointer' display='flex' justifyContent='space-between' w='9rem' h='2.8rem' border='1px solid grey'>
                            <Text mt='-1.2rem' fontSize='5xl' disabled={count === 1} onClick={()=>setCount(count - 1)}>-</Text><Text fontWeight='500' mt='.5rem'>{count}</Text><Text mt='-.3rem' fontSize='3xl' onClick={()=>setCount(count + 1)}>+</Text>
                        </Box>
                        <Button _hover={{bg:"#e5b95f"}} mt='1rem' bg='black' color='white' h='3rem' w='38rem' onMouseEnter={handleEnter}   onMouseLeave={handleLeave}>{ isHover ? <Box fontSize='2xl'><ion-icon  name="cart-outline"></ion-icon></Box> :"ADD TO CART"}</Button>
                        <Box mt='1.5rem' display='flex' fontSize='1.3rem' gap='1.5rem' color="grey">
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-google"></ion-icon>
                        </Box>
                    </Box>
                </Box>
                   
                   <Box>
                   <Tabs variant='soft-rounded' >
                        <TabList gap='1rem' ml='25rem' mt='3rem' >
                            <Tab fontSize='.8rem' color='black' _selected={{ color: 'black', bg: '#e5b95f', h:'3rem' }}>DESCRIPTION</Tab>
                            <Tab fontSize='.8rem' color='black'  _selected={{ color: 'black', bg: '#e5b95f', h:'3rem' }}>VIEW PLANS</Tab>
                            <Tab fontSize='.8rem' color='black'  _selected={{ color: 'black', bg: '#e5b95f', h:'3rem' }}> RETURNS POLICY</Tab>
                            <Tab fontSize='.8rem' color='black'  _selected={{ color: 'black', bg: '#e5b95f', h:'3rem' }}>CUSTOMER REVIEWS</Tab>
                           
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                            <Box w='40rem' ml='21rem' lineHeight='2rem'>
                                <p>We appreci-EIGHT your love and hence we've decided to treat you with 8 unbeatable beauty essentials from your favourite brands for just 599/- in 'The Own 8 All' August Fab Bag.</p>
                                <p>Here's what you can expect inside your August Fab Bag:</p>
                                <li>Lip Kit of your choice*</li>
                                <li>Sharisa India Timeless Matte Liquid Lipstick OR Teen Trendz 5 In 1 Step Matte Me Lipstick of your choice*</li>
                                <li>SUGAR POP Vitamin C & Tea Tree Facewash</li>
                                <li>Plum Avocado Frizz-Control Cleanse & Nourish Duo</li>
                                <li>Baiser India Skin Defence Masque OR Palmer's Raw Shea Butter Body Lotion OR Tvakh Whipped Fruit Body Butter*</li>
                                <li>Vriksha Veda Floral Fusion OR Keeva Naturals Scuba Dive Shower Gel</li>
                                <li>Raas Strawberry Lip Balm OR Tejas Blends Lavender Foot Mist OR The Soap Company India Foot therapy</li>
                                <li>Bonus*</li>
                                <p>*Two offers cannot be clubbed. Makeup choice will be available on the order confirmation page, on a first-come, first-served basis. 2nd product is subject to stock availability. Bonus skincare will be customized by the Fab Bag Crew.</p>
                               <p>FAB BAG delivers the best of beauty and makeup products once a month, customized just for you.</p>
                            </Box>
                            </TabPanel>
                            <TabPanel>
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
                            </TabPanel>
                            <TabPanel>
                              <Box w='40rem' ml='20rem'>
                              <li>Returns Policy for FAB BAG Monthly Subscriptions: 100% Happiness or Money-Back Guarantee</li>
                               <li>For more details, please see our Policy here.</li>
                               <li>Should you have any questions regarding this product, please feel free to get in touch with our friendly Customer Experience Team at crew@fabbag.com within 48 hours of receiving the shipment or call us at 022-4896-7878 Mon - Fri, 9am - 7pm.</li>
                              </Box>
                            </TabPanel>
                            <TabPanel>
                             <Box ml='20rem'mt='2rem'>
                             <Text fontSize='xl'>Customer Reviews</Text>
                             <Text>No reviews yet</Text>
                             <Text cursor='pointer' ml='30rem' color='#e5b95f'>Write a review</Text>
                             <hr style={{width:"10rem",marginLeft:"28rem"}} />
                             </Box>
                            </TabPanel>
                        </TabPanels>
                        </Tabs>
                   </Box>
             

               </Box>

         
               <Box mt='2rem'><Footor/></Box>
            
        </div>
    )
}