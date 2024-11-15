import React from 'react';
import './CardFeatured.css';
import {  FaArrowRightLong } from 'react-icons/fa6';
export function CardFeatured({img1 , img2,mybtn,text,date,res}){
    return(
        <div className={ res ? 'cardFeatured-none' : 'cardFeatured '}> 
            <img src={img1}></img>
            <div className='div-card-feat'>
                <div className='d-flex justify-content-between  align-items-center my-3'>
                    <button className='btn'>{mybtn}</button>
                    <p>{date}</p>
                </div>
                <h5 className='my-3'>{text}</h5>
                <div className='line-card'></div>
                <div className='d-flex justify-content-between align-items-center my-3'>
                <div className='d-flex gap-3'>
                    <img src={img2}></img>
                    <div>
                        <h4>Admin</h4>
                        <p>co,Founder</p>
                    </div>
                </div>
                <div className='icon-featured'>
                < FaArrowRightLong />
                </div>
                </div>
            </div>

        </div>
    )
}