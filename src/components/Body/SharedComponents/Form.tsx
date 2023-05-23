function Form({part}:{part:{head: string, btn_name: string}}) {
    const {head, btn_name} = part;

  return (
    <div className="form-container">
        <h2 className="small-font">{head}</h2>
        <form>
            <label htmlFor="name" className="smaller-font">Name</label>
            <input type="text" id="name" name="name" className="smaller-font" placeholder="Enter your name" />
            <label htmlFor="email" className="smaller-font">Email</label>
            <input type="email" name="email" id="email" className="smaller-font" placeholder="Enter your email" />
            <label htmlFor="message" className="smaller-font">Message</label>
            <textarea name="message" id="message" placeholder='Enter your name' className="smaller-font"></textarea>
            <input type="submit" className="smaller-font" value={btn_name} />
        </form>
    
    </div>
  )
}

export default Form
