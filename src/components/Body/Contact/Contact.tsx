import { contact_subpart_type, contact } from "../../Data/data";
import Form from "../SharedComponents/Form";

function Contact() {
  const {address, phone_num, email, form} = contact;

  return (
    <div id="contact">
      <h1>Contact us</h1>
      <div id="contact-info-wrapper">
        {
          contact_subpart(address)
        }
        {
          contact_subpart(phone_num)
        }
        {
          contact_subpart(email)
        }
      </div>
      <Form part={form} />
    </div>
  )
}

function contact_subpart(subpart:contact_subpart_type):JSX.Element{
  const {icon, info,  name} = subpart;

  return (
    <div className="contact-info">
      <div className="icon">
        {icon}
      </div>

      <h2 className="detail-title small-font">{name}</h2>

      <p className="detail small-font">{info}</p>
    </div>
  );
}

export default Contact
