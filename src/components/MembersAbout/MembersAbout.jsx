import { CardAbout } from '../CardAbout/CardAbout';
import { Title } from '../Title/Title';
import  './MembersAbout.css';
import img1 from './../../assets/imges/04.webp';
import img2 from './../../assets/imges/05.webp';
import img3 from './../../assets/imges/06.webp';
import img4 from './../../assets/imges/07.webp';
import img5 from './../../assets/imges/photo_2024-11-12_19-28-48.jpg';
import img6 from './../../assets/imges/photo_2024-11-15_19-49-32.jpg'
import React from 'react';
 export function MembersAbout (){
    return(
        <section className='sec-member-about'>
        <Title mytitl={'Team Mempers'} mytext={'Our Dedicated Team Members'} logo={false}/>
        <div className='my-cards-memper'>
          <CardAbout img={img1} tilte={'Marsirul Islam'} text={'Web Designer' }/>
          <CardAbout img={img2} tilte={'jessica Mardol'} text={'Cyber Export' }/>
          <CardAbout img={img3} tilte={'Arnold Hemingway'} text={'Web Export' }/>
          <CardAbout img={img4} tilte={'Shikon Haque'} text={'Data Analyst' }/>
        </div>
        <div className='line-member'>
            <div className='line-member-div'></div>
            <p >1K + Brands Trust Us</p>
            <div className='line-member-div'></div>
        </div>
            
            <div className='logos-member-about'>
              <img className='img5-none' src={img6}></img>
              <img className='img5-none' src={img6}></img>
              <img className='img5' src={img5}></img>
              <img className='img5-none' src={img6}></img>
              <img className='img5-none' src={img6}></img>
            </div>
     
        </section>
    )
 }