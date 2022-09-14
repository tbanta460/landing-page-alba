import React from 'react';
import './index.css';

import { ProfileOn, ProfileTw, ProfileTh, ProfileFo } from '../../../../assets';
const dataTestimonials = () => {
    return[
        {
            name: "Ananda Bayu",
            profile: ProfileOn,
            id: 585723123,
            comment: "They are people who are not only following the tasks, but can work as a team. Together.",
            stts: "COO at WieBetaaltWat"
        },
        {
            name: "Tia Marina",
            profile: ProfileTw,
            id: 22857621,
            comment: "We felt like we had a true partner throughout the process. They were clearly interested on our long-term success.",
            stts: "COO at WieBetaaltWat"
        },
        {
            name: "Putri Anggi",
            profile: ProfileTh,
            id: 57261293,
            comment: "We felt like we had a true partner throughout the process. They were clearly interested on our long-term success.",
            stts: "COO at WieBetaaltWat"
        },
        {
            name: "Fahmi Giantara",
            profile: ProfileFo,
            id: 12385291,
            comment: "They are people who are not only following the tasks, but can work as a team. Together.",
            stts: "COO at WieBetaaltWat"
        }
    ]
}
const Testimonials = () => {
    const myTestimonails = dataTestimonials();
    return(
        <>
            <section className='ctn-testimonails'>
                <div className='chd-testimonails'>
                <span className='is-testimonials is-excp'>Testimonials</span>
                <h2 className='ttl-testimonials is-ttl'>What clients love in working with Albatech Team</h2>
                <div className='wrp-testimonials'>
                    <ul className='lst-testimonials'>
                        {
                            myTestimonails.map(data => {
                                return(
                                    <li className='itm-testimonials' key={data.id}>
                                        <p className='rev-testimonials'>{data.comment}</p>
                                        <div className='inf-profile-testimonails'>
                                            <img src={data.profile} alt="profile testimonials" className='profile-testimonials'/>
                                            <div className='wrp-inf-profile'>
                                                <h5>{data.name}</h5>
                                                <span className='stts-profile'>{data.stts}</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials