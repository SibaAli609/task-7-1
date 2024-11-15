import './TitleAbout.css';
import React from "react";
import img1 from './../../assets/imges/asterisk.svg'
export function TitleAbout (){
    return(
        <section className='title-about-sec'>
            <div className='title-about'>
                <img src={img1}></img>
                <h3>Cyber Security</h3>
            </div>
            <div className='title-about'>
                <img src={img1}></img>
                <h3>It Solution</h3>
            </div>
            <div className='title-about'>
                <img src={img1}></img>
                <h3>Technology</h3>
            </div>
            <div className='title-about'>
                <img src={img1}></img>
                <h3>Data Secui</h3>
            </div>
            <div className='title-about-resp'>
                <img src={img1}></img>
                <h3>Data Secui</h3>
                <img src={img1}></img>
            </div>
        </section>
    )
}