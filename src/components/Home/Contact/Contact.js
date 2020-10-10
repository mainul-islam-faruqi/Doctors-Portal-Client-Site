import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="section-header d-flex justify-content-center align-items-center">
                <div className="blog-header-text text-center mb-4 ">
                    <p style={{color: "#1CC7C1", fontWeight: "700"}}> CONTACT US </p>
                    <h1 style={{color: "white" ,}}> Always Connect with us </h1>
                </div>
            </div>
            <div className="contact-form">
                <form action="" className="form">
                    <input type="text" name="" placeholder="Email Address*" id=""/>

                    <input type="text" name="" placeholder='Subject*' id=""/>

                    <input type="text" name="" placeholder="Your Message*" id="" className="input-description" />

                    <div style={{textAlign: "center", marginTop: "20px"}} >
                        <input type="submit" value="SUBMIT" id="button"  />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;