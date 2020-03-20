import React from 'react';
import Header from './Header';
import ImgHomeHero from '../../assets/Home-Hero-Image.jpg';



const Section1b
 =() =>{
    return(
        <div className="Section1b">
            <div className="imageBox">
                <img src={ImgHomeHero} alt="Home Hero Img"></img>
            </div>
            <div className="header">
                <Header />
            </div>
            
        </div>
    )
}

export default Section1b;