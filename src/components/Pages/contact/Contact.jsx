import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import "./contact.scss";
import { init } from 'emailjs-com';
init("user_0Y21E2NeaaDZCFgWUdJU6");

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eifvqbi', 'template_s19yzek', form.current, 'user_0Y21E2NeaaDZCFgWUdJU6')
      .then((result) => {
          console.log("Correct, ", result.text);
      }, (error) => {
          console.log("Error part ", error.text);
      });
      e.target.reset()
  };
  return (

    <div className="contact" id="contact">

      <h1 className="heading"><span className="span1">Contact</span>Me</h1>
      <div className="row">
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4987.854363779201!2d7.379167000000001!3d51.312464!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b92510cd1e39ef%3A0xca0dbe1c99f788ec!2sR%C3%B6thelteich%2038%2C%2058256%20Ennepetal%2C%20Germany!5e0!3m2!1sen!2sus!4v1633285724472!5m2!1sen!2sus"
          allowfullscreen="" loading="lazy">
        </iframe>
        <form ref={form}  onSubmit={sendEmail}  method="POST" >
          <h3>Fill form</h3>
          <input type="text" placeholder="name" name="from_name" required className="box" />
          <input type="email" placeholder="email" name="email" required className="box" />
          <input type="tel" placeholder="number" name="number" className="box" />
          <textarea placeholder="your message" name="message" class="box" cols="30" rows="10"></textarea>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    </div>
  )
}
