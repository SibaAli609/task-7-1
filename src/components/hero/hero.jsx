import './hero.css';
import React from "react";
import { Button } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import photo2 from './../../assets/imges/heroThumb1_1.webp'
import photo3 from './../../assets/imges/heroShape1_3.webp'

export function Hero(){
    return(
        <section className='mx-5 hero text-light  '>
          <div className='sec-1 '>
            <div  >
              <div  className='di-hero '>
         
            <div className='text-hero mt-5 '>
             <p className='m-auto' >Everything you Need To Create A Website</p>
            </div>
            <h2 className='my-3'>Business Innovation With It Services Expertise</h2>
            <div className='s1'>
                <ul className='my-3 s2'>
                    <li ><GiCheckMark className='mx-2'/>Deployment and Support</li>
                    <li><GiCheckMark className='mx-2'/>Discovery and Analysis</li>
                </ul>
                <ul className='my-3 s3'>
                    <li><GiCheckMark className='mx-2'/>Flexibility and Adaptability</li>
                    <li><GiCheckMark className='mx-2'/>Competitive Advantage</li>
                </ul>
                
            </div>
            <Button  size="lg" active className='rounded-pill mx-3 btn-hero my-3'>
        GET STARTED<FaArrowRightLong className='mx-2 '/>
      </Button>
         </div>
         <div> 
         <img className='photo2' src={photo2}></img>
         </div>
         </div>
             <div className='div-photo3'>
             <img className='photo3' src={photo3}></img>
             </div>
          </div>
         
         
             
      
        </section>
    )
}