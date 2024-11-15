import React from 'react';
import './Feedback.css';
import img1 from './../../assets/imges/ctaThumb1_1.webp'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { Title2 } from '../Title2/Title2';
import { CardFeedback } from '../CardFeedback/CardFeedback';
import img2 from './../../assets/imges/testiThumb3_1.webp';
import img3 from './../../assets/imges/testiThumb3_2.webp';
import img4 from './../../assets/imges/testiThumb3_3.webp';


export function Feedback(){
    return(
       <section className='feed-sec'>
        <div className='feed-div1'>
            <img src={img1}></img>
            <div className='design-titl '>
               <p ><FaArrowLeftLong />CONTACTUS <FaArrowRightLong /></p>
               <h4 >24/7 Expert Hosting Support Our Customers Love</h4>
            </div>
            <button >TALK TO SPECIALIST <FaArrowRightLong /></button>
        </div>
        <div className='feed-div2 '>
          <Title2 titl={'TESTMONIALS'} text={'Our Latest Client Feedback'}/>
          <div className='cards-feed'>
            <CardFeedback text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum officia autem optio nam. Facere excepturi labore officiis perferendis nulla quae, odit maiores minus nostrum? Illum soluta quis nobis molestiae assumenda?'}
              img1={img2} text2={'Kristim watsun'} port={'Web Designer'} color={true}/>
            <CardFeedback text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum officia autem optio nam. Facere excepturi labore officiis perferendis nulla quae, odit maiores minus nostrum? Illum soluta quis nobis molestiae assumenda?'}
              img1={img3} text2={'Theresa Weeb'} port={'tech enthusiast'}  color={false}/>
             <CardFeedback text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum officia autem optio nam. Facere excepturi labore officiis perferendis nulla quae, odit maiores minus nostrum? Illum soluta quis nobis molestiae assumenda?'}
              img1={img4} text2={'Ronald Rechards'} port={'Web Enterprenour'}  color={true}/>
          </div>
        </div>
       </section>
    )
}