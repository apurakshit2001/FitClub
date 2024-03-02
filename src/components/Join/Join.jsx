import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';




const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_sxhttmh', 'template_7rktyaw', form.current, {
                publicKey: 'wUlKMvdB9BhE8qHxa',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='Join' id='join-us'>
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US</span>
                </div>
            </div>
            <div className="rightt j">
                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type="email" name="user_email" id="" placeholder='Enter your email ' />

                    <button className='btn btn-j'>JOIN NOW</button>
                </form>
            </div>
        </div>
    )
}

export default Join
