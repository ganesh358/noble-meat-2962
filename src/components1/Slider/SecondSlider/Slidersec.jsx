import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../Slider.module.css";
import { useNavigate } from "react-router-dom";
import { Img, Text } from "@chakra-ui/react";



export default function Slidersecond() {
  
  
  return (
    <div style={{marginTop:"3rem"}} className={styles.container}>
      <Slide >
         <div style={{
               height:"26rem",
               width:"98%",
               display:"grid",
               gridTemplateColumns:"repeat(4, 1fr)",
               gridGap:"2rem",
               marginLeft:".9rem",
               marginTop:".5rem",
               textAlign:"center",
               fontWeight:"500",
               lineHeight:"25px",
               color:"#000000",
           
        }}>
          <div>
            <img style={{borderRadius:"3rem",border:"3px solid #e5b95f"}} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-1_2_2048x.png?v=1659292954" alt="" />
            <Text  fontSize='1.04rem'>SUGAR POP LIP KIT OF YOUR CHOICE*</Text>
            <Text  fontSize='1.04rem'>CHOICE*</Text>
          </div>
          <div><img style={{borderRadius:"3rem",border:"3px solid #e5b95f"}} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_9bedf574-c534-4874-91c5-e28b5c916023_2048x.png?v=1659500490" alt="" />
          <Text w='16rem' ml='5' fontSize='1.04rem'>SHARISA INDIA TIMELESS MATTE </Text>
          <Text  fontSize='1.04rem'>LIQUID LIPSTICK OR TEEN TRENDZ 5</Text>
          <Text  fontSize='1.04rem'>IN 1 STEP MATTE ME LIPSTICK OF</Text>
          <Text  fontSize='1.04rem'>YOUR CHOICE*</Text>
          </div>
          <div><img style={{borderRadius:"3rem",border:"3px solid #e5b95f"}} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-3_c51024ea-e8b5-49e6-a60f-7ebadf441433_2048x.png?v=1659674566" alt="" />
          <Text w='18rem' fontSize='1.04rem'>SUGAR POP VITAMIN C & TEA TREE FACEWASH</Text>
          </div>
          <div><img style={{borderRadius:"3rem",border:"3px solid #e5b95f"}} src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-5_6626eab8-e174-491f-9b2e-ec771773381a_2048x.png?v=1659887286" alt="" />
          <Text w='18rem' fontSize='1.04rem'>PLUM AVOCADO FRIZZ-CONTROL CLEANSE & NOURISH DUO</Text>
          </div>
        </div>
      </Slide>
    </div>
  );
}

