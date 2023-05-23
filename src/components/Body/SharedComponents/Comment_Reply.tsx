import { comment_reply_type } from "../../Data/data";

function Comment_Reply({part}:{part: comment_reply_type}) {
    const {img_url, name, day, comment} = part;

  return (
    <div className="comment-reply">
      <img src={img_url} alt={name} />

      <div className="name-comment-day">
        <div className="name-day">
            <h2 className="small-font">{name}</h2>
            <span className="small-font">{day}</span>
        </div>
        <p className="comment smaller-font">
            {comment}
        </p>
      </div>
    </div>
  )
}

export default Comment_Reply;
