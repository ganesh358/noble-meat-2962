import { Slide } from "react-slideshow-image";

import slideImages from "../../data/images";

import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const navigate = useNavigate()
  const handlelink = () =>{
      navigate("/")
  }
  return (
    <div className={styles.container}>
      <Slide easing="ease">
        {slideImages.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div onClick={handlelink} style={{ backgroundImage: `url(${slideImages[index]})` ,
              height:'28.5rem'
            }}>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
