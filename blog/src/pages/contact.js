import React, { Fragment } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Title from "../components/title"
import emailjs from 'emailjs-com';
import styled from "styled-components";

const Wrap = styled.div`

  display: flex;
  height:18rem;
  min-width:29.124rem;
  max-width:29.124rem;
  background-color:white;
  margin:1rem;
  border:0.5px solid #249232;
  z-index:12;
  position:relative;
  border-radius: 1rem;
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
  @media (max-width: 388px) {
    height:14rem;
    min-width:16.180rem;
    max-width:16.180rem;
  }
`

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2cperr9', 'template_6kksnxf', e.target, 'user_FeTapy16tAzXFUump9uwq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      
      var el = document.getElementsByClassName('inputs');

      for(var i=0; i<el.length; i++){
      
        el[i].value = '';
      }
  }

  return (
    <Fragment>
      <Header></Header>
      <Layout>
        <Title>Contact</Title> 
        <div id="flexDiv">
        <Wrap>
        <form className="contact-form" onSubmit={sendEmail}>
              <div className="nameBox">
                <input type="hidden" name="contact_number" />
                <input type="text" name="user_name" placeholder="보내는 분 성함" className="inputs" id="name" />
              </div>
              <div className="nameBox">
                <input type="email" name="user_email" placeholder="답장 받으실 이메일" className="inputs" id="email" />
              </div>
              <div className="nameBox">
                <textarea name="message" placeholder="메시지를 적어주세요." className="inputs" id="msgBox" />
              </div>
              <input type="submit" value="Send" style={{background:`lightgreen`,border:`none`, borderRadius:`1rem`, width:`4rem` }} />
            </form>
        </Wrap>
        <Wrap id="contacts">
          📧  <a style={{textDecoration:`none`}} href="mailto:ny.yeony.kim@gmail.com">ny.yeony.kim@gmail.com</a><br />
          📍 <span> Seoul, Republic of Korea </span>
        </Wrap>
        </div>
      </Layout>
    </Fragment>

  );
}
