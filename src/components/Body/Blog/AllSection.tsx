import BigImgText from '../SharedComponents/BigImgText';
import SmallImgText from '../SharedComponents/SmallImgText';
import Quote from '../SharedComponents/Quote';
import { all } from '../../Data/data';

function AllSection() {

    const {big_img_text, small_img_texts, quotes} = all;
  return (
    <section id="all">
        
        <div className="grid-left">
            <BigImgText big_img_text={big_img_text} />
        </div>

        <div className="grid-middle">

            {small_img_texts.map((small_img_text, id)=>{

                return (
                    <div className="grid-middle-item" key={id}>

                        <SmallImgText small_img_text={small_img_text} />

                    </div>
                );
            })}
        </div>

        <div className="grid-right">
            
            <h2 className="medium-font">
                Trending
            </h2>

            {quotes.map((quote,i)=>{
                const {writer,title}=quote;

                return (
                    <div className="grid-right-quote" key={i}>

                        <Quote title={title} writer={writer} />
                        
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default AllSection;
