import React, {useState} from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Logo } from '../../../assets';
const Header = () => {
    const [isNav, setIsNav] = useState(false)
    const navMenu = [
        {
            name:"Home",
            path: "/",
            id:2425213
        },
        {
            name: 'About',
            path: '#about',
            id: 228192
        },
        {
            name: 'Service',
            path: '#service',
            id: 229501
        },
        {
            name: 'Portfolio',
            path: '#portfolio',
            id: 492201
        },
        {
            name: 'Blogs',
            path: '#blogs',
            id: 5592102
        },
        {
            name: 'Career',
            path: '#career',
            id: 2581273
        },
        {
            name: 'Contact Us',
            path: '/contact-us',
            id: 5282912
        },
        {
            name: 'Login',
            path: '/login',
            id: 58527183
        }
    ]
    return (
        <>
            <header className='ctn-hdh'>
                <div className='chd-hdh'>
                    <div className='hdh-logo'>
                        <img src={Logo} alt='logo'/>
                        <span className='menu-m' onClick={() => setIsNav(!isNav)}>Menu</span>
                    </div>
                    <div className='hdh-nav'>
                        <ul className="nav">
                            {
                                navMenu.map(data => {
                                    return(
                                        <li key={data.id} className='nav-itms'>
                                            <Link className={`link hdh-nav-itms ${data.path === '/contact-us' && 'my-cntc'}`} to={data.path}>
                                                <span className='txt-nav'>{data.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={`nav-m ${isNav && "nav-m-ac"}`}>
                        <ul className="nav">
                            {
                                navMenu.map(data => {
                                    return(
                                        <li key={data.id} className='nav-itms'>
                                            <Link className={`link hdh-nav-itms ${data.path === '/contact-us' && 'my-cntc'}`} to={data.path}>
                                                <span className='txt-nav'>{data.name}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header