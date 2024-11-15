import React from "react";
import './CardpPicing.css'
import myimg2 from './../../assets/imges/pricingIcon1_1.svg'
import { GiCheckMark } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
export function CardpPicing ({color}){
    return(
        <>
        <div className=" porder-card-pricing  ">
            <div className={color ? 'main-card-pri' : 'main-card-pri-dark' }>
                <div >
                    <p>Regular plans</p>
                    <p>$49/Moth</p>
                </div>
                <img src={myimg2}></img>
            </div>
            <ul>
                <li className=" w-100 align-items-center d-flex  justify-content-between">
                    <div className="me-5">
                    <GiCheckMark /> 100 GN $$D Storage 
                    </div>
                    <FaRegQuestionCircle  />
                 </li>
                 <li className=" w-100 align-items-center d-flex  justify-content-between">
                    <div >
                    <GiCheckMark />Weekly Backups
                    </div>
                     <FaRegQuestionCircle />
                     </li>
                     <li className="align-items-center d-flex  justify-content-between w-100">
                   <div>
                   <GiCheckMark />Unimited free $$l</div> 
                   <FaRegQuestionCircle /></li>
                <li className="align-items-center d-flex  justify-content-between w-100">
                   <div >
                   <GiCheckMark />24/7 System Monitoring 
                   </div>
                   <FaRegQuestionCircle />
                </li>
                <li className="align-items-center d-flex  justify-content-between w-100">
                   <div   >
                     <GiCheckMark />Free Dorrain ($9.99 Value)
                     </div>
                     <FaRegQuestionCircle />
                     </li>
                <li className="align-items-center d-flex  justify-content-between w-100">
                    <div>
                    <IoIosClose />Frame 16789</div>
                    <FaRegQuestionCircle /></li>
                <li className="align-items-center d-flex  justify-content-between w-100">
                   <div> 
                    <IoIosClose />20+Payment Methods</div>
                   <FaRegQuestionCircle />
                   </li>
            </ul>
            <bottom className={color ? 'mybtn' : 'btn-dark' }>OET STARTED NOW <FaArrowRightLong /></bottom>
        </div>
        </>
    )
    
}