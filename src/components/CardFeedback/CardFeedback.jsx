import React from 'react';
import './CardFeedback.css';
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
export function CardFeedback({img1,text,text2,port ,color}){
    return(
       <div className={color ? 'cardFeedback ' : 'dark-cardFeedback'}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <p>{text}</p>
        <div className='d-flex align-items-center
   justify-content-between'>
            <div className='d-flex gap-2'>
               <img src={img1}></img>
               <div>
               <h4>{text2}</h4>
               <p>{port}</p>
               </div>
             </div>
            
            <RiDoubleQuotesR className='icon2' />
        </div>
       </div>
    )
}