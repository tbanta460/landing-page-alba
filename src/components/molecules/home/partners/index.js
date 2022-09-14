import React, { useRef } from 'react';
import './index.css';
import { Spns1, Spns2, Spns3, Spns4, Spns5 } from '../../../../assets';

const Partners = () => {
    const changeDot = useRef()

    const handleChangeDot = (e) => {
        const getChildren = Array.from(changeDot.current.children);
        getChildren.map(data => {
            data.classList.remove('act-dot')
        });
        e.currentTarget.classList.add('act-dot')
    }
    return(
        <>
            <section className='ctn-partners'>
                <div className='chd-partners'>
                    <div className='partners'>
                        <ul className='lst-partners'>
                            <li className='itm-partners'>
                                <img src={Spns1} alt='logo partners hippo'/>
                            </li>
                            <li className='itm-partners'>
                                <img src={Spns2} alt='logo partners home and living'/>
                            </li>
                            <li className='itm-partners'>
                                <img src={Spns3} alt='logo partners ilios'/>
                            </li>
                            <li className='itm-partners'>
                                <img src={Spns4} alt='logo partners dio'/>
                            </li>
                            <li className='itm-partners'>
                                <img src={Spns5} alt='logo partners melandas'/>
                            </li>
                        </ul>
                    </div>
                    <div className='p-dots' ref={changeDot}>
                        <div className='p-dot act-dot' onClick={handleChangeDot}>
                        
                        </div>
                        <div className='p-dot' onClick={handleChangeDot}>
                        
                        </div>
                        <div className='p-dot' onClick={handleChangeDot}>
                            
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='wrp-banner'>
                            <span>Is software important for your business?</span>
                            <h4>Build it with Albatech</h4>
                            <button className='btn btn-banner'>Consultation Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Partners