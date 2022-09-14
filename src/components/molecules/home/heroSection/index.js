import React from 'react';
import './index.css';
 import { HeroImage, Dots, Dotss, WhatsApp } from '../../../../assets';
const HeroSection = () => {
    return (
        <>
            <section className='ctn-hs' id='about'>
                <div className='chd-hs'>
                    <div className='hs-txt'>
                        <div className='pst-rltv'>
                            <h2 className='txt-bld'>Build or scale up</h2>
                            <h3 className='txt-ydt'>your development team</h3>
                        </div>
                        <span className="line">in weeks, not months</span>
                        <button className='btn btn-hs'>Book now</button>
                    </div>
                    <div className='hs-gmb'>
                        <img src={HeroImage} alt='hero gambar' className='hs-gmb-mn' />
                        <img src={Dots} alt='dots' className='dots' />
                        <img src={Dotss} alt='dotss' className='dotss' />
                    </div>
                </div>
            </section>
            <div className='whatsapp'>
                <img className='wa' src={WhatsApp} alt='button whatsapp'/>
            </div>
        </>
    )
}

export default HeroSection