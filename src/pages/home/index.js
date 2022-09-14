import React from 'react';
import './index.css';
import { HeroSection, Services, Progress, Portfolio, Testimonials, Partners } from '../../components';
const Home = () => {
    return (
        <>
            <div className="ctn-home">
                <div className="chd-home">
                    <HeroSection />
                    <Services />
                    <Progress />
                    <Portfolio />
                    <Testimonials />
                    <Partners />
                </div>
            </div>
        </>
    )
}

export default Home