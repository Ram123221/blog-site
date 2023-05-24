import { single_post } from "../../Data/data"
import CategoryDatePlusQuote from "../SharedComponents/CategoryDatePlusQuote";
import ImgParas from "../SharedComponents/ImgParas";
import Comment_Reply from "../SharedComponents/Comment_Reply";
import Form from "../SharedComponents/Form";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";

function SinglePost() {
  const {single_post_top,img_paras, comments, replies, form, pop_trend_lat} = single_post;
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
    <div id="single-post">
      <div id="single-post-left">
        <div id="single-post-part">
          <CategoryDatePlusQuote part={single_post_top} />
        </div>

        <div id="img-para">
          {
            img_paras.map((img_para, i)=>{
              return (
                <ImgParas part={img_para} key={i}/>
              )
            })
          }
        </div>

        <div id="comment-reply-section">
          <h2 className="comment-head mid-font">
            {`${comments.length} Comments`}
          </h2>

          <div className="comment-reply-container">
            <Comment_Reply part={comments[0]} />

            <div className="reply">
              <h3 className="mid-font comment-head">
                {`${replies.length} Replies`}
              </h3>
              {replies.map((reply,index)=>{
                return (
                  <Comment_Reply key={index} part={reply} />
                )
              })}
            </div>

            <div className="commen-reply-container">
              <Comment_Reply part={comments[1]} />
            </div>
          </div>
        </div>

        <Form part={form} />
      </div>

    <div id="single-post-right">
      <div id="pop-trend-lat">
          <header id="pop-trend-lat-head">
            <h1 className={translateLetter=="p"?"active-title":""} onClick={()=>translate("p")}>popular</h1>
            <h1 className={translateLetter=="t"?"active-title":""} onClick={()=>translate("t")}>trending</h1>
            <h1 className={translateLetter=="l"?"active-title":""} onClick={()=>translate("l")}>latest</h1>
          </header>
          {/*PDL is pop trend lates*/}
          <div id="PDL-grid-container">
            <div id="PDL-grid" style={{transform: (translateLetter == "p")?"translateX(0%)":translateLetter=="t"?"translateX(-100%)":"translateX(-200%)"}}>
              <div id="popular">
                {popular.map((pop,i)=>{
                  return (
                    <CategoryDatePlusQuote part={pop} key={i} />
                  )
                })}
              </div>
              <div id="trending">
                {trending.map((pop,i)=>{
                  return (
                    <CategoryDatePlusQuote part={pop} key={i} />
                  )
                })}
              </div>
              <div id="latest">
                {latest.map((pop,i)=>{
                  return (
                    <CategoryDatePlusQuote part={pop} key={i} />
                  )
                })}
              </div>
            </div>

          </div>
      </div>

      <div id="video">
        <h1 className="single-post-bottom-head section-header">
          video
        </h1>
        <img src="./src/assets/post-slide-3.jpg" alt="slide-3" />
      </div>

      <div id="categories">
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

      <div id="tags">
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
    </div>


    </div>
  );
}

export default SinglePost;
