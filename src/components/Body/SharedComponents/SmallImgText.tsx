import { small_img_text_type } from "../../Data/data"

function SmallImgText({small_img_text}:{small_img_text: small_img_text_type}) {
  const { img_url,date,category,title} = small_img_text;
  
  return (
    <>
        <img src={img_url} alt={title.slice(0,11)} />

        <div className="cat-date small-font">

            <span className="category">
                {category} 
            </span>

            <span className="dot-middle"> </span>

            <span className="date">
                 {date}
            </span>
        </div>

        <div className="title mid-font">
            {title}
        </div>
    </>
  )
}

export default SmallImgText
