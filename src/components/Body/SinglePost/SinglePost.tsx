import { single_post } from "../../Data/data"
import CategoryDatePlusQuote from "../SharedComponents/CategoryDatePlusQuote";
import ImgParas from "../SharedComponents/ImgParas";
import Comment_Reply from "../SharedComponents/Comment_Reply";
import Form from "../SharedComponents/Form";
import PopLatTrend from "./PopLatTrend";

function SinglePost() {
  const {single_post_top,img_paras, comments, replies, form, pop_trend_lat} = single_post;

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
      <PopLatTrend />
    </div>


    </div>
  );
}

export default SinglePost;
