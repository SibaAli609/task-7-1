import React  from "react";
import './Title.css';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
 export function Title({mytitl,mytext,logo}){
    return(
        <div className="tilt1">
          <p className='text'><FaArrowLeftLong />{mytitl} <FaArrowRightLong /></p>
           <div className='serv-title  mb-5'>
             <h2>{mytext}</h2>
             <div className={logo?  'logo-row d-flex' : 'logo-row-none' }>
                <div className='div-logo-left mx-2'>
                  <FaArrowLeftLong className='logo-left' />
                </div>
                <div className=' div-logo-right'>
                <FaArrowRightLong className='logo-right'/>
                </div>
                  
             </div>
             <div className={!logo?  'logo-row d-flex' : 'logo-row-none' }>
               <button className="memb-btn btn text-light ">all Members  <FaArrowRightLong /></button>
             </div>
           </div>
        </div>
    )
 }