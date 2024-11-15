import './HeroAboutContact.css';
import React from "react";
import photo1 from './../../assets/imges/breadcrumb.webp';
import photo2 from './../../assets/imges/element.webp';

export function HeroAboutContact({title,text}){
    return(
       <div className='hero-about-contact'>
        <img src={photo1}></img>
        <div className='my-blue'></div>
        <img className='photo2-hero-about' src={photo2}></img>
   
        <div className='my-div-HeroAbotContact'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
       </div>
    )
}