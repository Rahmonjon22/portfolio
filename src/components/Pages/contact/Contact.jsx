import { useState } from "react";

import "./contact.scss";
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (

    <div className="contact" id="contact">

      <h1 className="heading"><span className="span1">Contact</span>Me</h1>
      <div className="row">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4987.854363779201!2d7.379167000000001!3d51.312464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b92510cd1e39ef%3A0xca0dbe1c99f788ec!2sR%C3%B6thelteich%2038%2C%2058256%20Ennepetal%2C%20Germany!5e0!3m2!1sen!2sus!4v1633285724472!5m2!1sen!2sus"
          allowfullscreen="" loading="lazy">
        </iframe>
        <form onSubmit={handleSubmit} action="https://formsubmit.co/rahmonjon2@yahoo.com" method="POST" >
          <h3>Fill form</h3>
          <input type="text" placeholder="Your name" className="box" />
          <input type="email" placeholder="Your email" className="box" />
          <input type="tel" placeholder="number" className="box" />
          <textarea placeholder="your message" class="box" cols="30" rows="10"></textarea>
          <input type="submit" value="send message" className="btn" />
          {message} && <span>Thank you for your message, I will soon contact you</span>
        </form>
      </div>
    </div>
  )
}
