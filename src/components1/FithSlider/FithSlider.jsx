import { Flex, Img } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";





export default function Sliderfifth(){
    return (
        <div style={{
           
            marginTop:"4rem",
            width:"100%",
            height:"12rem",
            backgroundColor:"#e5b95f"
        }}>
            <div  style={{width:"78%",marginLeft:"10rem"}}>
            <Slide >
                <Flex gap='8.4rem'  w='20rem' mt='3rem'>
                    <Img borderRadius='.8rem' w='5.8rem' h='5.8rem' border='2px solid black' src='https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Baiser_India_Logo_160x160.jpg?v=1625063066'/>
                    <Img borderRadius='.8rem' w='5.8rem' h='5.8rem' border='2px solid black' src='https://cdn.shopify.com/s/files/1/0052/7551/6995/files/6256280-43d286588b4beafb0e4a423acf72a620-medium_jpg_5e3480ef-0e7a-4aea-88d0-c48379ad9837_160x160.jpg?v=1599290601'/>
                    <Img borderRadius='.8rem' w='5.8rem' h='5.8rem' border='2px solid black' src='https://cdn.shopify.com/s/files/1/0052/7551/6995/files/brick-new-york-with-symbol-white_46f7f93d-9ac3-4a6b-8827-7341564c001c_160x160.png?v=1599126230'/>
                    <Img borderRadius='.8rem' w='8rem' h='5.8rem' border='2px solid black' src='https://cdn.shopify.com/s/files/1/0052/7551/6995/files/palmers-logo_33a73358-5f3d-4cd4-ac8c-ecf89a2c72b2_160x160.jpg?v=1597725541'/>
                    <Img borderRadius='.8rem'  w='5.8rem' h='5.8rem' border='2px solid black' src='https://cdn.shopify.com/s/files/1/0052/7551/6995/files/LLW1vAyf_400x400_36a490d2-defb-4c90-898d-2af5215e8433_160x160.jpg?v=1578730298'/>
                </Flex>
            </Slide>
            </div>
        </div>
    )
}