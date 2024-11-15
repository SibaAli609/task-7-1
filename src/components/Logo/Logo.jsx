import './Logo.css'
import React from 'react'
import logo1 from './../../assets/imges/brandLogo1_1.svg'
import logo2 from './../../assets/imges/brandLogo1_2.svg'
import logo3 from './../../assets/imges/brandLogo1_3.svg'
import logo4 from './../../assets/imges/brandLogo1_4.svg'
import logo5 from './../../assets/imges/brandLogo1_5.svg'

export  function Logo(){
    return(
      

    
   <>
   <div className='img-logo'>
        <img  src={logo1}></img>
        <img  src={logo2}></img>
        <img  src={logo3}></img>
        <img  src={logo4}></img>
        <img  src={logo5}></img>
    </div>
        
            <img className=' logo3'  src={logo3}></img>
  
</>

        
    )
}