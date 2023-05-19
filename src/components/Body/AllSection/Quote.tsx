
function Quote({title, writer}:{title:string, writer: string}) {
  return (
    <div className="quote-item">
        <h3 className="small-font">
            {title}
        </h3>

        <span className="smaller-font">
            {writer}
        </span>
    </div>
  )
}

export default Quote;
