import AllSection from "./AllSection";
import MiddleTwoSection from "./MiddleTwoSection";
import { culture } from "../../Data/data";
import { business } from "../../Data/data";
import Carousel from "../../Header/Carousel/Carousel";
function Blog() {
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
