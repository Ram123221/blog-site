import { big_img_text_type } from '../../Data/data';

function BigImgText({big_img_text}:{big_img_text:big_img_text_type}) {

    const {img_url,category,second_img_url,date,heading,summary,person_name} = big_img_text;

  return (
    <div className='big-img-text'>
        <img src={img_url} alt="big-image-pic" />
        
        <div className="container">
            <div className="cat-date small-font">

                <span className="category">
                    {category} 
                </span>

                <span className="dot-middle"> </span>

                <span className="date">
                    {date}
                </span>
            </div>

            <h1 className="larger-font">
                {heading}
            </h1>

            <p className="small-font">
                {summary}
            </p>

            <div className="img-name">

                <img src={second_img_url} alt={person_name} />

                <span className="person-name small-font">
                    {person_name}
                </span>
            </div>
        </div>
    </div>
  )
}

export default BigImgText
