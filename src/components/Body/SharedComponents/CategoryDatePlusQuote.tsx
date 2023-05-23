import Quote from "./Quote";
import { cat_date_quote_type } from "../../Data/data";

function CategoryDatePlusQuote({part}:{part:cat_date_quote_type}) {
    const {category, date, title, writer} = part;

  return (
    <div className="cat-date-quote">
      <div className="cat-date small-font">

        <span className="category">
            {category} 
        </span>

        <span className="dot-middle"> </span>

        <span className="date">
            {date}
        </span>
        </div>

        <Quote title={title} writer={writer} />
    </div>
  )
}

export default CategoryDatePlusQuote
