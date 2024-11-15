import  './About.css';
import React from 'react';
import { NavbarAbout } from "./../../components/NavbarAbout/NavbarAbout";
import { HeroAbout } from '../../components/HeroAbout/HeroAbout';
import { TitleAbout } from '../../components/titleAbout/titleAbout';
import { MembersAbout } from '../../components/MembersAbout/MembersAbout';
import { Footer } from '../../components/Footer/Footer';

export  function About(){
    return(
<>
<NavbarAbout />
<HeroAbout />
<TitleAbout />
<MembersAbout />
<Footer mydiv={false} />
</>
    )
}
