import { Link } from 'react-router-dom';
import '../banner_home/Banner.css';
import Profile from './Group 9.png';
import Vector from './Vector 14.svg';

function Banner(){  
    return(
            <div className="bannerHome">
            <div className="bannerHome__circle"></div>
            <img src={Vector} alt="" className="bannerHome__vector"/>
            <img src={Profile} alt="" className='bannerHome__img'/>
            <div className='bannerHome bannerHome__text'>
                <h1 className='bannerHome bannerHome__text--title'>Hi!</h1>
                <h2 className='bannerHome bannerHome__text--subtitle'>I am Laura</h2>
                <h3 className='bannerHome bannerHome__text--paragraph'>I am a Frontend Developer and an Industrial Engineer</h3>
                <Link to="/aboutme" className='item'><button className='bannerHome__btn'>Know more</button></Link>
            </div>
            </div>
    )
}

export default Banner;
