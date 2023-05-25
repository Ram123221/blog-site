import AllSection from "./AllSection";
import MiddleTwoSection from "./MiddleTwoSection";
import { culture } from "../../Data/data";
import { business } from "../../Data/data";
import Carousel from "../../Header/Carousel/Carousel";
import { useEffect } from "react";

function Blog() {
  //to go to top of page each time component renders
  useEffect(()=>{
    window.scrollTo(0,0);
},[])

  return (
    <div id="blog">
        <Carousel />
        <AllSection />
        <MiddleTwoSection section={culture} />
        <MiddleTwoSection section={business} />
        
        <AllSection />
    </div>
  )
}

export default Blog
