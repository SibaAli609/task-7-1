import './ContactSection.css';
import React from 'react';
import img1 from './../../assets/imges/video.webp'
import { FaArrowRightLong } from 'react-icons/fa6';
 export function ContactSection(){
    return(
       <section className='sec-contact'>
          <div className='contact-card1'>
            <div className='div1-contact-card1'>
            <div>
                    <p>Call Us 7/24</p>
                    <p>+208-555-0112</p>
            </div>
            <div>
               
                    <p>Make a Quote</p>
                    <p>Infotech@gmail.com</p>
               
            </div>
            <div>
               
                    <p>Location</p>
                    <p>4517 Washington ave.</p>
                
            </div>
            </div>
            <img src={img1}></img>
          </div>
          <div className='contact-card2'>
            <p className='contact-card2-p'>Ready to get started?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium natus illum asperiores minus </p>
            <form>
              <div className='div-input'>
                <div className='my-input'>
                <label className='my-lable' for="name">your name*</label>
                <input id="name" type="text" />
                </div>
                <div  className='my-input'>
                <label className='my-lable' for="email">your email*</label>
                <input  type='email' />
                </div>
              </div>
              <div className='my-text '>
              <lable for="text">Write Message*</lable>
              <textarea  id="text"></textarea>
              </div>
              <button className='btn'>Send Message <FaArrowRightLong className='mx-2'/></button>
            </form>
          </div>
       </section>
    )
 }