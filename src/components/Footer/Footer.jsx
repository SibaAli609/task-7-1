import React from 'react';
import './Footer.css';

import { FaInstagram, FaYoutube } from 'react-icons/fa6';
import logo1 from './../../assets/imges/logo.svg';

import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

import { SlCalender } from 'react-icons/sl';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";
export function Footer ({mydiv}){
    return(
        <section className={ mydiv ?'sec-footer' : 'sec-footer-none'}>
            <div className={ mydiv ?' div1-footer' : 'div1-footer-none'}>
               
              
            </div>
            <div  className={!mydiv ?'  about-footer' : ' div1-footer-none '}>
                <div className='div1-about-footer'>
                <div className='div-icon-footer'>
                <IoLocationSharp className='icon-footer2'/>
                </div>
                    <div>
                        <p>Address</p>
                        <p>468 Rocky Rood philadelphia pA</p>
                    </div>
                </div>
                <div className='div2-about-footer'>
                <div className='div-icon-footer'>
                <MdOutlineMarkEmailRead className='icon-footer2'/>
                </div>
                    <div>
                        <p>send Email</p>
                        <p>info@example.com</p>
                    </div>
                </div>
                <div className='div3-about-footer'>
                <div className='div-icon-footer'>
                <MdWifiCalling3 className='icon-footer2'/>
                </div>
                    <div>
                       <p>call Emergency</p>
                        <p>+88 0123 654 99</p>
                    </div>
                </div>

            </div>
            <div className='div2-footer'>

                <div>
                    <img src={logo1}></img>
                    <p>Extexh is a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa error harum, repellendus suscipit blanditiis optio, omnis deleniti nostrum, rem cumque numquam minus iure porro!</p>
                    <div className='d-flex footer-icons'>
                        <div className='footer-icons-div'><FaFacebookF /></div>
                        <div className='footer-icons-div'><IoLogoTwitter /></div>
                        <div className='footer-icons-div'><FaYoutube /></div>
                        <div className='footer-icons-div'><FaInstagram /></div>
                    </div>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Exteach About</li>
                        <li>Our Services</li>
                        <li>Our Blogs</li>
                        <li>FAQ'S</li>
                        <li>Contact Us</li>
                    </ul>

                </div>
                <div>
                    <h3>Recent Posts</h3>
                    <div className='d-flex gap-3'>
                        <div>
                        <p ><SlCalender  />15th April , 2024</p>
                        <p>Top 5 Most Famous Technology Trend In 2024</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3 my-3'>
                        <div>
                        <p><SlCalender />20th june,2024</p>
                        <p>The Surfong Man Will Blow Your Mind</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Contact us</h3>
                    <p><MdEmail />info@example.com</p>
                    <p> <BsFillTelephoneFill />+208-6666-0112</p>
                    <button className='btn'>Your email address </button>
                    <p>I ogree to the Privocy Policy.</p>
                </div>
            </div>
            <div className='div3-footer'>
                <p>@Copyright 2024 by Extech</p>
                <ul >
                    <li>Terms&Condition</li>
                    <li>Privacu Policy</li>
                </ul>
            </div>
        </section>
    )
}