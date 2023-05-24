import PopLatTrend from "../SinglePost/PopLatTrend";
import BigImgText from "../SharedComponents/BigImgText";
import { search_result } from "../../Data/data";

function SearchResult() {
  const {imgs_texts} = search_result;

  return (
    <section id="search-result">
      <div id="search-result-top">
        <h1 className="smaller-font">search results</h1>

        <div id="search-result-left">

          <div id="imgs-texts">
            
            {imgs_texts.map((img_text, i)=>{

              return (
                <BigImgText big_img_text={img_text} key={i} />
              )
            })}

          </div>

          <div id="pagination">

          </div>

        </div>
      </div>

      <div id="search-result-bottomOrleft">
        <PopLatTrend />
      </div>
    </section>
  )
}

export default SearchResult
