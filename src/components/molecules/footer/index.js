import React from 'react';
import './index.css';

import { Logo, Facebook, Linkedin, Instagram } from '../../../assets';
const Footer = () => {
    return(
        <>
            <footer className='ctn-footer'>
                <div className='chd-footer'>
                    <div className='footer-lgo'>
                        <img src={Logo} alt='logo alba' className='logo-footer' />
                        <p className='abt-footer'>Albatech acts as a corporate partner to help digitize their business to accelerate trends in remote work.</p>
                        <ul className='sm-footer'>
                            <li className='itm-sm-footer'>
                                <img src={Facebook} alt='icon facebook' className='sm-footer sm' />
                            </li>
                            <li className='itm-sm-footer'>
                                <img src={Linkedin} alt='icon linkedin' className='sm-footer sm' />
                            </li>
                            <li className='itm-sm-footer'>
                                <img src={Instagram} alt='icon instagram' className='sm-footer sm' />
                            </li>
                        </ul>
                    </div>
                    <div className='footer-qcl'>
                        <span className='txt-footer m-qcl'>Website</span>
                        <ul className='lst-qcl'>
                            <li className='itm-qcl'><span className='txt-qcl'>About</span></li>
                            <li className='itm-qcl'><span className='txt-qcl'>Service</span></li>
                            <li className='itm-qcl'><span className='txt-qcl'>Portfolio</span></li>
                            <li className='itm-qcl'><span className='txt-qcl'>Blogs</span></li>
                            <li className='itm-qcl'><span className='txt-qcl'>Career</span></li>
                        </ul>
                    </div>
                    <div className='footer-cntc'>
                        <span className='txt-footer'>Contact</span>
                        <span className='addres-footer'>The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera, Kota Tangerang, Banten 15143</span>
                        <span className='tlp-footer'><span className='txt-p'>P:</span> +62 81 1889 3383</span>
                        <span className='tlp-footer'><span className='txt-p'>E:</span> info@albatech.id</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer