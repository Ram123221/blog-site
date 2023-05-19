import { small_desc_type } from "../../Data/data";

function SmallDesc({part}:{part:small_desc_type}) {
    const {person_name, desc} =part;

  return (
    <div className='small-desc'>
      <span className="smaller-font">{person_name}</span>
      <p className="smaller-font">{desc}</p>
    </div>
  )
}

export default SmallDesc;
