import React from 'react'
import './index.css';

import { PortfolioOn, PortfolioTw, PortfolioTh } from '../../../../assets';
const dataPortfolio = () => {
    return[
        {
            title:"ILIOS app (B2B E-commerce)",
            image: PortfolioOn,
            id: 982198,
            kat:"Mobile Apps",
            desk:"Has a unique selling point where not all companies offer applications for sales, data collection and management."
        },
        {
            title:"Home and Living",
            image: PortfolioTw,
            id: 572813,
            kat:"Website development",
            desk:"Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living."
        },
        {
            title:"HIPPO",
            image: PortfolioTh,
            id: 857260,
            kat:"Website development",
            desk: "Albatech help to create e-commerce and company profile for Hippo’s Website with realtime transaction and integration with Payment Gateway to accept multi payment."
        },
    ]
}
const Portfolio = () => {
    const myPortolio = dataPortfolio()
    return(
        <>
            <section className='ctn-portfolio' id="portfolio">
                <div className='chd-portfolio'>
                    <span className='is-portfolio is-excp'>Portfolio</span>
                    <h2 className='ttl-portfolio is-ttl'>The software that we build takes our clients to the next level</h2>
                    <div className='wrp-portfolio'>
                        <ul className='lst-portfolio'>
                            {
                                myPortolio.map(data => {
                                    return(
                                        <li className='itm-portfolio' key={data.id}>
                                            <div className='wrp-itm-portfolio'>
                                                <img src={data.image} alt='portfolio gambar'/>
                                                <div className='wrp-txt-portfolio'>
                                                    <span className='excp-portfolio'>{data.kat}</span>
                                                    <h4 className='ttl-itm-portfolio'>{data.title}</h4>
                                                    <p className='desk-itm'>{data.desk}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className='btn btn-portfolio'>Learn More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio