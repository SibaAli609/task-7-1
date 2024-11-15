
import Ysnavbar from './../../components/Navbar/Navbar';
import { Hero } from './../../components/hero/hero';
import { Services } from './../../components/Services/Services';
import  './Home.css'
import React from 'react';
import  { Logo } from '../../components/Logo/Logo';
import { Pricing } from '../../components/Pricing/Pricing';
import { Feedback } from '../../components/Feedback/Feedback';
import { Featured } from '../../components/Featured/Featured';
import { Footer } from '../../components/Footer/Footer';
export  function Home(){
    return(
        <>
        <Ysnavbar />
        <Hero />
        <Logo />
        <Services />
        <Pricing />
        <Feedback />
        <Featured />
        <Footer mydiv={true}/>
       </>
        
        
    )
}