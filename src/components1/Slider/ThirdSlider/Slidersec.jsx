import { Slide } from "react-slideshow-image";


import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

const data  = [
         {
          coma:"",
          des:"I love each and every Fab Bag that I receive each month past three years. I am so much in love with fab bags and all the lovely products and cute little pouches that I get. I love Fab Bag.",
          name:"- Munira"
         },
         {
          coma:"",
          des:"I've been a regular Fab Bag subscriber for many years now and I must say that the Fab Bag team comes up with something or the other as a special attraction in the bag every month.  As always, thank you Fab Bag for making my day with this bag!!!",
          name:"- Poonam"
        },
         {
          coma:"",
          des:"I like the fact that they offer high-quality products. Every single product from the bag stands out. It is a MUST TRY for every girl out there.",
          name:"- Shika"
        },
         {
          coma:"",
          des:"I am highly impressed with the idea of surprising the customers by leaving them to guess, whats inside the Bag. Surprises brings excitement and I am always excited to receive my Fab Bag. First of all I should say that the Bags are awesome and each time I got my Fab Bag, I was really happy to find whats inside it. Really satisfied! :)",
          name:"- Pratika"
        },
         {
          coma:"",
          des:"This is my second month and I am already addicted. Can't wait for my third bag. It feels like someone with so much love who loves pampering you. Thank you Fab bag. Amazing products Thank you with gratitude.",
          name:"- Kirthana"
        },
         {
          coma:"",
          des:"Who doesn't want to get pampered? And this bag is all you need when you want to show some extra love to yourself. Every other product is of the best quality. And top of it doesn't burn a hole in your pocket. Every month I just wait for my bag as a small kid waits for her favourite toy. This Fab Bag is an upright bliss.",
          name:"- Anushree"
        },
         {
          coma:"",
          des:"I am getting addicted to Fab Bag's. The first one I had ordered was simply to check it out as my friend had recommended. I am not someone who spends a lot of time thinking about beauty products and I am clueless when it comes to such matters. Which is why the Fab Bag's are perfect for me. This August Fab Bag had everything I needed! The product curation is perfect. It's like having my own personal shopper for beauty products and such pretty bags too.",
          name:"- Saileena"
        },
         {
           coma:"",
           des:"The products are amazing and I am just in love with the bag! Kudos to you team!",
           name:"- Niranjana"
          }
]


export default function Sliderthird() {
  
  
  return (
    <div  className={styles.container}>
         <Text mt='4rem' fontWeight='400'  color='#222222' textAlign='center' fontSize='4xl'>TESTIMONIALS</Text>
          <Box border='1px solid #e5b95f' w='18rem' ml='33rem' mt='.6rem'> </Box> 
     <div  style={{
     marginTop:"5rem",
     textAlign:"center",
     height:"20rem",
     width:"70rem",
     marginLeft:"7rem",
     backgroundImage:`url("https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png?v=1548829465")`

    }}>
        <Slide easing="ease">
            {data.map((item) => <Text w='90%' ml='3.5rem' lineHeight='2rem'> <Text><span><i style={{fontSize:"3.2rem"}} class="fa-solid fa-quote-left"></i></span></Text><Text mt='2.5rem' fontWeight='500' fontSize='16px' color='#000000' >{item.des}</Text> <Text mt='4rem'>{item.name}</Text></Text>)}
         </Slide>
      
       
     </div>
    </div>
  );
}

