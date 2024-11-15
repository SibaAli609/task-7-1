import './SmallCardServices.css';
import React from 'react'; 
export function SmallCardServices ({num,title , text}){
    return(
        <div className='card2-srev'>
           <h4>{num}</h4>
           <h2>{title}</h2>
           <p>{text}</p>
        </div>
    )
}