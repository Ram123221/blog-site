import { small_sec_type } from "../../Data/data"

function TopicParas({obj}:{obj:small_sec_type}) {
    const {sub_topic, paragraphs} = obj;
  return (
    <div className="small-about-sec">

        <span className="large-font">{sub_topic}</span>

        {paragraphs.map((p,i)=>{
        return <p className="smaller-font" key={i}>{p}</p>
        })}

    </div>
  )
}

export default TopicParas
