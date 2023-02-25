import './Contact.css'
import {React,useRef} from 'react'
import emailjs from '@emailjs/browser';
import { BsFacebook,BsInstagram,BsWhatsapp } from 'react-icons/bs';

function Contact() {

  const form = useRef();

  const sendEmail= (e)=> {
    e.preventDefault();

    emailjs.sendForm('service_7owikzw', 'template_bn6iyqd', form.current, 'fTdS3rQRe2858komw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset();
  }

  return (
    <div id='Contacts'>
      
            <div id='conTitle'>Contact Us</div>
            <div id='conContent'>

              <div id='conLogo'>
                <div id="logoContainer"></div>
              </div>
              <div id='socialMedia'>
                <div id='follow'>Follow us</div>
                <a href='https://www.instagram.com/eatcleandz/'><div className='reseau instagram'><BsInstagram/>Instagram</div></a>
                <a href='https://www.facebook.com/eatclean.dz'><div className='reseau facebook'><BsFacebook/>Facebook</div></a>
                <a href="https://web.whatsapp.com/"><div className='reseau whatsapp'><BsWhatsapp/>WhatsApp  (+213)655966881</div></a>

              </div>

                  <div id='emailForm'>
                    <div id='formContainer'>
            <form ref={form} onSubmit={sendEmail}>


                    <div className='formarea nameform'>
                <input type="text" name="user_name" placeholder='Name..' />
                    </div>

                    <div className='formarea email'>
                    <input type="email" name="user_email" placeholder='Mail..' />
                    </div>

                    <div className='formarea subject'>
                    <input type="text" name="subject" placeholder='Subject..' />
                    </div>

                    <div className='message'>
                      <textarea name="message" placeholder='Message..' />
                      </div>
                      <div id="sendBtn">
                <input type="submit" value="Send" />
                      </div>
            </form>
                      </div>
                  </div>
            </div>
    </div>
  )
}

export default Contact