
function Quote({title, writer}:{title:string, writer: string}) {

  //to get first letter for single-post page
  // const firstLetter = writer.slice(0,1);
  // const others = writer.slice(1);
  return (
    <div className="quote-item">
        <h3 className="small-font">
            {title}
        </h3>

        <span className="smaller-font">
            {/* <span className="first-letter">
              {firstLetter}
            </span>
            <span className="remaining">
              {others}
            </span> */}
            {writer}
        </span>
    </div>
  )
}

export default Quote;
