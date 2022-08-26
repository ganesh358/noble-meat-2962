import { Flex, Img, Text } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";





export default function SliderFouth(){
    return (
        <div style={{ width:"80%",marginLeft:"10%",height:"14rem",}}>
            <Slide>
                <Flex gap='1rem' overflow='hidden' backgroundBlendMode='lighten'>
               <div style={{}}>
                 <Img  src ='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-1_large.gif?v=1656064858'/>
                 <Text fontSize='.9rem'>Jul'22 The Beauty Bundle Fab Bag</Text>
                 <Text color='grey' fontStyle='italic' fontWeight='600'>fromRs. 599.00</Text>
               </div>
               <div style={{}}>
               <Img src='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3_large.gif?v=1655088937'/>
               <Text  fontSize='.9rem'>Jun'22 The Make It Reign Fab Bag</Text>
                 <Text color='grey' fontStyle='italic' fontWeight='600'>fromRs. 599.00</Text>
               </div>
               <div style={{}}>
               <Img src='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2-With-BONUS_large.gif?v=1652238042'/>
               <Text  fontSize='.9rem'>May'22 The AweSummer May Fab Bag</Text>
                 <Text color='grey' fontStyle='italic' fontWeight='600'>fromRs. 599.00</Text>
               </div>
               <div style={{}}>
               <Img src='https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_1728264b-2e0f-4314-9a3c-0fde458d72a7_large.png?v=1649483317'/>
               <Text  fontSize='.9rem'>Apr'22 The Sassy Spring Fab Bag</Text>
                 <Text color='grey' fontStyle='italic' fontWeight='600'>fromRs. 599.00</Text>
               </div >
               
               </Flex>
            </Slide>
        </div>
    )
}
