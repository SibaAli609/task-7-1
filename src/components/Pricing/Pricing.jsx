import { Title2 } from '../Title2/Title2';
import './Pricing.css'
import React from 'react';
import myimg from './../../assets/imges/pricingShape1_2.webp'
import mylogo1 from './../../assets/imges/pricingIcon1_2.svg'
import { CardpPicing } from '../CardpPicing/CardpPicing';
import img1 from './../../assets/imges/pricingShape1_1.webp'

export function Pricing(){
    return(
    <>
    <section className='my-pracing'>
    <Title2 titl={'OUR PRICING'} text={'Our Awesome Pricing Plan'} />
     <img className='img1-pric' src={myimg}></img>
   
     <div className='d-flex main'>
        <div className=' bord'>
            <p className='bord-p1'>Monthly</p>
            <p>Yearly</p>
        </div>
        <img src={mylogo1}></img>
        <p className='main-p3'>Save 25%</p>
     </div>
     <div className='card-pricing'>
     <CardpPicing color={true}/>
     <CardpPicing color={false}/>
     <CardpPicing  color={true}/>
     </div>
     <img className='pri-img2' src={img1}></img>
    </section>
     
    </>
    )
}