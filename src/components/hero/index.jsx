import React from 'react'
import './style.css'
import me from '../../assets/images/me.png'

const Hero = () => {
    return (
        <div className="hero" id='beranda'>
            <div className='container'>
                <div className="row hero-wrapper">
                    <div className="col hero-left">
                        <p className='text-black'>Hai, Nama saya</p>
                        <h2 className='hero-text'>Kaka Hardiansyah</h2>
                        <h4 className='hero-text-2'>Saya adalah seorang Front End Developer</h4>
                    </div>
                    <div className="col hero-right">
                        <img className='hero-img' src={me} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;