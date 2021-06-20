import React, { Fragment } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Title from "../components/title"
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2cperr9', 'template_6kksnxf', e.target, 'user_FeTapy16tAzXFUump9uwq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Fragment>
      <Header></Header>
      <Layout>
        <Title>Contact</Title>
        <div style ={{display: `flex`, flexDirection: `row`, justifyContent: `space-around`, alignItems: `center`}}>
        <div >
          email : nnn
          </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        </div>
      </Layout>
    </Fragment>

  );
}
