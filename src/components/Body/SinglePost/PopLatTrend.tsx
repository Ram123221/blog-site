import { single_post } from "../../Data/data";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import CategoryDatePlusQuote from "../SharedComponents/CategoryDatePlusQuote";

function PopLatTrend() {
    const {pop_trend_lat} = single_post;
    const {popular, trending, latest, categories_tags} = pop_trend_lat;
    const [translateLetter, setTranslateLetter] = useState<string>("p");

    
    const translate = (val:string) =>{
        switch(val){
        case "p":
            setTranslateLetter("p");
            break;
        case "t":
            setTranslateLetter("t");
            break;
        case "l":
            setTranslateLetter("l");
            break;
        }
    };

  return (
    <>
        <div className="pop-trend-lat">
            <header className="pop-trend-lat-head">
                <h1 className={translateLetter=="p"?"active-title mid-font":"mid-font"} onClick={()=>translate("p")}>popular</h1>
                <h1 className={translateLetter=="t"?"active-title mid-font":"mid-font"} onClick={()=>translate("t")}>trending</h1>
                <h1 className={translateLetter=="l"?"active-title mid-font":"mid-font"} onClick={()=>translate("l")}>latest</h1>
            </header>
            {/*PDL is pop trend lates*/}
            <div className="PDL-grid-container">
                <div className="PDL-grid" style={{transform: (translateLetter == "p")?"translateX(0%)":translateLetter=="t"?"translateX(-100%)":"translateX(-200%)"}}>
                <div className="popular">
                    {popular.map((pop,i)=>{
                    return (
                        <CategoryDatePlusQuote part={pop} key={i} />
                    )
                    })}
                </div>
                <div className="trending">
                    {trending.map((pop,i)=>{
                    return (
                        <CategoryDatePlusQuote part={pop} key={i} />
                    )
                    })}
                </div>
                <div className="latest">
                    {latest.map((pop,i)=>{
                    return (
                        <CategoryDatePlusQuote part={pop} key={i} />
                    )
                    })}
                </div>
                </div>

            </div>
        </div>

        <div className="video">
            <h1 className="single-post-bottom-head section-header">
            video
            </h1>
            <img src="./src/assets/post-slide-3.jpg" alt="slide-3" />
        </div>

        <div className="categories">
            <h1 className="single-post-bottom-head small-font section-header">
            categories
            </h1>
            <div className="list">
            {categories_tags.map((title,i)=>{
                return (
                <div className="smaller-font" key={i}>
                    <span><FaAngleRight /></span>
                    <span>{title}</span>
                </div>
                )
            })}
            </div>
        </div>

        <div className="tags">
            <h1 className="single-post-bottom-head small-font section-header">
            tags
            </h1>
            <div className="list">
            {categories_tags.map((title,i)=>{
                return (
                <div className="smaller-font" key={i}>
                    <span>{title}</span>
                </div>
                )
            })}
            </div>
        </div>
    </>
  )
}

export default PopLatTrend
