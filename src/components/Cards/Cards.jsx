import './Cards.css';
import React from 'react';

export  function Cards({MyImg,titl ,text , btn}){
    return(
        <div className='Yscrads'>
            <div className='card-img'>
                <img src={MyImg}></img>
            </div>
            <h3 className='mt-3'>{titl}</h3>
            <p>{text} </p>
            <button className='card-btn'>{btn}</button>
        </div>

       
    )}
