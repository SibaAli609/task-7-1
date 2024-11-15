import { ContactSection } from '../../components/ContactSection/ContactSection';
import { Footer } from '../../components/Footer/Footer';
import { HeroAboutContact } from '../../components/HeroAboutContact/HeroAboutContact';
import { NavbarAbout } from '../../components/NavbarAbout/NavbarAbout';
import  './Contact.css'
import React from 'react';
export  function Contact(){
    return(
         <>
         <NavbarAbout />
         <HeroAboutContact title={'contact us'} text={'Home > contact us '} />
         <ContactSection />
         <iframe className='ifram' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830623.2673747964!2d36.60340273934179!3d35.587717213016646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15241c8bc2bf561f%3A0xdbb2edac5c45c32b!2z2YXYrdin2YHYuNipINin2YTZhNin2LDZgtmK2KnYjCDYs9mI2LHZitin!5e0!3m2!1sar!2snl!4v1723804501219!5m2!1sar!2snl"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
         
         <Footer mydiv={false} />
        </>
    )}