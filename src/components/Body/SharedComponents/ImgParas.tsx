import { img_paras_type } from '../../Data/data';

function ImgParas({part}:{part: img_paras_type}) {
    const {img_caption, img_url, paras} = part;
  return (
    <div className='img-paras'>
      <figure>
        <img src={img_url} alt={img_url} />
        <figcaption className='smaller-font'>{img_caption}</figcaption>
      </figure>
      <div className="paras">
        {paras.map((para,i)=>{
            return (
                <p className="single-post-para smaller-font" key={i}>
                    {para}
                </p>
            );
        })}
      </div>
    </div>
  )
}

export default ImgParas
