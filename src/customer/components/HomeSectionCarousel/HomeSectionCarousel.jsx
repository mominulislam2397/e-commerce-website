import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
import { useState } from "react";
import { mens_katua } from "../../../Data/mens_katua";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev=()=> setActiveIndex(activeIndex-1);
  const slideNext =() => setActiveIndex(activeIndex+1);
  
  

  const syncActiveIndex = ({item})=> setActiveIndex(item);

  

  const items = mens_katua.slice(0,10).map((item) => 
    <HomeSectionCard product={item}></HomeSectionCard>);
  return (
    <div className="  border ">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          mouseTracking
        />
        {activeIndex !== items.length-5 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
          sx={{ transform: "rotate(90deg)", color: "black"}}
           ></KeyboardArrowLeftIcon>
        </Button>}

        {activeIndex !==0 &&
         <Button
          onClick={slidePrev}
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="previous"
        >
          <ArrowBackIosIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          ></ArrowBackIosIcon>
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
