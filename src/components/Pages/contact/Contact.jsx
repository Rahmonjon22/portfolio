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

      <h1 className="heading"><span className="span1">Contact </span></h1>
      <div className="row">
        <form ref={form} onSubmit={sendEmail} method="POST" >
          <input type="text" placeholder="name" name="from_name" required className="box" />
          <input type="email" placeholder="email" name="email" required className="box" />
          <input type="tel" placeholder="number" name="number" className="box" />
          <textarea placeholder="your message" name="message" class="box" cols="30" rows="10"></textarea>
          <div class="wrapper">
            <button type="submit"><span>Send</span></button>
          </div>
        </form>
      </div>
    </div>
  )
}

