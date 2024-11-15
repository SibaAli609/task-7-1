import React from 'react';
import './CardAbout.css';

export function CardAbout({img , tilte , text}){
    return(
        <div className='card-about'>
            <img src={img}></img>
            <div className='div-card'>
                <h3 >{tilte}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}