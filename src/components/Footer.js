import React from 'react';
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer'>
            <p><AiOutlineMail /> jonirenko@gmail.com</p>
            <p><AiFillLinkedin /> <a href='linkedin.com' className='linkedin'>LinkedIn</a></p>
        </div>
    </div>
  )
}

export default Footer;