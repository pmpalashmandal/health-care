import React from 'react';
import { Button } from 'react-bootstrap';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <h2 className="fw-bold p-2 my-4 bg-secondary text-white w-75 mx-auto">Contact Us</h2>
            {/* start contact form */}
            <form className="w-50 mx-auto">
                <div class="row">
                    <h5 className="text-left">Enter Name:</h5>
                    <br />
                    <input type="text" />
                    <br />
                </div>
                <div class="row">
                    <h5 className="text-left">Enter Email:</h5>
                    <br />
                    <input type="text" />
                    <br />
                </div>
                <div class="row">
                    <h5 className="text-left">Enter Message:</h5>
                    <br />
                    <textarea name="message" rows="8" ></textarea>
                    <br />
                </div>
                <Button className="btn-success mt-2">Submit</Button>
            </form>
        </div>
    );
};

export default Contact;