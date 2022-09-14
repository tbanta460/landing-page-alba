import React from 'react';
import './index.css';

import { Logo, Facebook, Linkedin, Instagram } from '../../../assets';
const Login = ({password, email, handleChange, handleSubmit, checkError}) => {
    return(
        <>
            <div className='ctn-form-login'>
                <div className='chd-form-login'>
                    <div className='wrp-form-login'>
                        <div className='h-login'>
                            {checkError !== "" && (<div className='error-alrt'>Terjadi Kesalahan Ketika Login</div>)}
                            <img src={Logo} alt='logo' className='logo-login'/>
                            <h5>Welcome Back</h5>
                            <span className='txt-login'>Enter your details to get sign in to your account</span>
                        </div>
                        <div className='f-login'>
                            <form >
                                <input type="email" placeholder="Masukkan Email Anda" className='inpt inpt-email'value={email} onChange={handleChange} name="email"/>
                                <input type="password" placeholder="Masukkan Password Anda" className='inpt inpt-password' value={password} onChange={handleChange} name="password"/>
                                <span className='trb-login'>Having trouble in sign in?</span>
                                <button type='button'onClick={handleSubmit}className='btn btn-login'>Sign In</button>
                            </form>
                        </div>
                        <span className='line-login'>Or sign in with</span>
                        <div className='o-login'>
                            <ul className='ant-login'>
                                <li className='itm-login'>
                                    <img src={Facebook} alt='icon social media' className='icn-login'/>
                                </li>
                                <li className='itm-login'>
                                    <img src={Instagram} alt='icon social media' className='icn-login'/>
                                </li>
                                <li className='itm-login'>
                                    <img src={Linkedin} alt='icon social media' className='icn-login'/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login