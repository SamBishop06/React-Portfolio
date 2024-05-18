// import React from "react";
import Header from "./Header";
import "../styles/Contact.css";
function Contact () {
    return (
        <div className="Header-contact">
            <div className="contact-text">
                <form className="Form-styling" action="https://getfor.io/slug"> <Header>Contact</Header>
                    <title>Contact</title>
                    <input 
                    type="text" 
                    name="name"
                    placeholder="Name"
                    className="name-styling"
                    />
                    <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="Email-text"
                    />
                    <textarea 
                    placeholder="Message"
                    name="message" 
                    className="Email-me"
                    rows="10"
                        />
                        <button 
                        type="button"
                        className="Email-button"
                        >Email Me!

                        </button>
            </form>
            </div>
        </div>
    )
}
export default Contact;