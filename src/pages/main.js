import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routess } from '../config';
import { Header, Footer } from '../components';
const Main = () => {
    return(
        <>
            <div className="main">
                <Router >
                    <Header />
                    <Routess />
                    <Footer />
                </Router>
            </div>
        </>
    )
}

export default Main