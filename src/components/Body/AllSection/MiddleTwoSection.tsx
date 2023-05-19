import SectionHeader from "./SectionHeader";
import BigImgText from "./BigImgText";
import CategoryDatePlusQuote from "./CategoryDatePlusQuote";
import SmallImgTextPlusDesc from "./SmallImgTextPlusDesc";

import { middle_sections_type } from "../../Data/data";

function MiddleTwoSection({section}:{section:middle_sections_type}) {

    const {header, middle_section_left, middle_section_right} = section;
    const {sectionHeader, seeAll} = header;
    const id= header.sectionHeader;

    const {first_part, second_part, third_part, last_part} = middle_section_left;
  return (
    <section id={id} className="middle-two-section">
      
        {/*header of middle section*/}
        <SectionHeader sectionHeader={sectionHeader} seeAll={seeAll} />
        
        <div className="middle-two-section-inner">
            <div className="middle-section-left">
                
                <div className="first-part">
                    <BigImgText big_img_text={first_part} />
                </div>

                <div className="container">
                    <div className="second-part">
                        <SmallImgTextPlusDesc part={second_part} />
                    </div>

                    <div className="third-part">
                        <CategoryDatePlusQuote part={third_part} />
                    </div>
                </div>

                <div className="last-part">
                    <SmallImgTextPlusDesc part={last_part} />
                </div>
            </div>

            <div className="middle-section-right">
                {middle_section_right.map((cat_date_quote,i)=>{
                    return (
                        <CategoryDatePlusQuote part={cat_date_quote} key={i}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default MiddleTwoSection
