
import './Services.css';
import React from 'react';
import { Cards } from '../Cards/Cards';
import img1 from '../../assets/imges/serviceIcon1_2.svg';
import img2 from './../../assets/imges/serviceIcon1_3.svg';
import img3 from './../../assets/imges/serviceIcon1_1.svg';
import img4 from './../../assets/imges/serviceIcon1_4.svg';
import img5 from './../../assets/imges/video.webp'
import { Title } from '../Title/Title';
import { SmallCardServices } from '../SmallCardServices/SmallCardServices';


export  function Services(){
    return(
       
       <section className='sec-serv' >
           <Title mytitl={'Services'} mytext={'Elevating Businesses With IT Ingenuity'} logo={true}/>
           <div className=' MyCrds' >
           <Cards MyImg={img1} titl={'Woo Commerce'} text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi libero, enim deserunt possimus, assumenda laborum dicta magn'
           } btn={'Read more'}/>
           <Cards MyImg={img2} titl={'CRM Solutions'}  text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi libero, enim deserunt possimus, assumenda laborum dicta magn'}
            btn={'Read more'} />
           <Cards MyImg={img3} titl={'Web Design'}   text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi libero, enim deserunt possimus, assumenda laborum dicta magn'}
            btn={'Read more'}/>
           <Cards MyImg={img4} titl={'Data Guard sentinel'}  text={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi libero, enim deserunt possimus, assumenda laborum dicta magn'}
            btn={'Read more'} />
          
           </div>
           <div className='srev-pos'>
           <iframe className='ifram-video'  src=" Video by fauxels from Pexels: https://www.pexels.com/video/happy-people-working-together-as-a-team-3249902/"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             <div>
                <div className='Cards2-serv'>
                    <SmallCardServices num={'01'} title={'Reguement'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero vitae ipsam doloremque laboriosam doloribus cumque veniam alias, minus odit nisi neque autem reiciend'}/>
                    <SmallCardServices num={'02'} title={'Ui/Ux Design'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero vitae ipsam doloremque laboriosam doloribus cumque veniam alias, minus odit nisi neque autem reiciend'}/>
                    <SmallCardServices num={'03'} title={'Prototype'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero vitae ipsam doloremque laboriosam doloribus cumque veniam alias, minus odit nisi neque autem reiciend'}/>
                    <SmallCardServices num={'04'} title={'Development'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero vitae ipsam doloremque laboriosam doloribus cumque veniam alias, minus odit nisi neque autem reiciend'}/>
                </div>
             </div>
           </div>
       </section>
       
    )
}