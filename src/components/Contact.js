import React from 'react'
import emailjs from 'emailjs-com'

const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();

        console.log(process.env);
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,USER_ID)
        .then((result)=>{console.log(result.text);},
        (error)=>{console.log(error.text);});
        e.target.reset();
    }

    return (
        <>
            <div className="wrapContact">
                <div class="contact-page">
                    <h2>Get in touch</h2>
                    <div class="contact-info">
                        <div class="item">
                            <i class="icon fas fa-home fa-3x" ></i>
                            Inside You
                        </div>
                        <div class="item">
                            <i class="icon fas fa-phone fa-3x"></i>
                            +1 BRAIN
                        </div>
                        <div class="item">
                            <i class="icon fas fa-envelope fa-3x"></i>
                            your_mind@address.com
                        </div>
                        <div class="item">
                            <i class="icon fas fa-clock fa-3x"></i>
                            Always prescribed by Doctor
                        </div>
                    </div>
                    <form onSubmit={sendEmail} class="contact-form">
                        <input name="name" type="text" class="textb" placeholder="Your Name"/>
                        <input name="email" type="email" class="textb" placeholder="Your Email"/>
                        <textarea name="message" placeholder="Your Message"></textarea>
                        <input type="submit" class="btn" value='Send'/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
