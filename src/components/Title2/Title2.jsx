import React from "react";
import './Title2.css';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
 export function Title2({titl,text}){
    return(
        <>
       
        <p className='text text-center'><FaArrowLeftLong /> {titl}<FaArrowRightLong /></p>
        <h2 className=' text-center'>{text}</h2>
        
        </>
    )
 }