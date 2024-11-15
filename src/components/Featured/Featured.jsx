import React from 'react';
import './Featured.css';
import { Title } from '../Title/Title';
import { CardFeatured } from '../CardFeatured/CardFeatured';
import img1 from'./../../assets/imges/blogThumb1_2.webp';
import img2 from './../../assets/imges/blogProfile1_2.webp';
import img3 from './../../assets/imges/blogThumb1_3.webp';
import img4 from './../../assets/imges/blogProfile1_3.webp';
import img5 from './../../assets/imges/blogThumb1_1.webp';
import img6 from './../../assets/imges/blogProfile1_1.webp'
export function Featured(){
    return(
       <section>
        <Title mytitl={'BLOG & NEWS'} mytext={'Featured News and Ineights'} logo={true}/>
        <div className='cards-featured'>
            <CardFeatured img1={img1} img2={img2} mybtn={'Uncategorized'} date={'MARCH 14.2024'}
             text={'Best And Fastest Data Server Ever'} res={false}/>
            <CardFeatured img1={img3} img2={img4} mybtn={'Technology'} date={'MARCH 29.2024'}
             text={'Life Wont one Beast Air Over Above All'} res={true} />
             <CardFeatured img1={img5} img2={img6} mybtn={'Shared Hosting '} date={'MARCH 24.2024'}
             text={'Attentive Was Born In 2015 Help Sales Teams'} res={true} />
        </div>
       </section>
    )
}