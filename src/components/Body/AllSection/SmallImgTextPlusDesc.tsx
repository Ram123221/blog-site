import SmallImgText from "./SmallImgText";
import { img_txt_plus_small_desc_type } from "../../Data/data";
import SmallDesc from "./SmallDesc";

function SmallImgTextPlusDesc({part}:{part:img_txt_plus_small_desc_type}) {
    const {description, ...small_img_text} = part;

  return (
    <>
        <SmallImgText small_img_text={small_img_text} />
        <SmallDesc part={description} />
    </>
  )
}

export default SmallImgTextPlusDesc
