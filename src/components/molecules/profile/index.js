import React from 'react';
import './index.css';


import { MyProfile } from '../../../assets';
const Profile = ({name, hoby, umur, lahir, skils, token, handleChange, handleSubmit, checkEdit}) => {
    return (
        <>
            <section className='ctn-prf'>
                <div className='chd-prf'>
                    <div className='wrp-prf'>
                        <img src={MyProfile} alt='foto profile' className='my-profile'/>
                        <span className='line-prf'></span>
                        <div className='txt-prf'>
                            <ul className='lst-prf'>
                                <li className='itm-prf'><span className='name txt-prf'>Token: <span className='bold-txt'>{token}</span></span></li>
                                <li className='itm-prf'><span className='name txt-prf'>Nama: {name}</span></li>
                                <li className='itm-prf'><span className='name txt-prf'>Lahir: {lahir}</span></li>
                                <li className='itm-prf'><span className='name txt-prf'>Umur: {umur}</span></li>
                                <li className='itm-prf'><span className='name txt-prf'>Hoby: {hoby}</span></li>
                                <li className='itm-prf'><span className='name txt-prf'>Kemampuan: {skils}</span></li>
                            </ul>
                            <button className='btn btn-prf' onClick={handleSubmit}>Edit</button>
                        </div>
                    </div>
                    {checkEdit && (<div className='form-prf'>
                        <form >
                            <div>
                                <label>Nama:</label>
                                <input type="text" placeholder="Masukkan Nama Anda" className='inpt inpt-email'value={name} onChange={handleChange} name="name"/>
                            </div>
                            <div>
                                <label>Tanggal Lahir:</label>
                                <input type="text" placeholder="Masukkan Kelahiran Anda" className='inpt inpt-password' value={lahir} onChange={handleChange} name="lahir"/>
                            </div>
                            <div>
                                <label>Umur:</label>
                                <input type="text" placeholder="Masukkan Umur Anda" className='inpt inpt-password' value={umur} onChange={handleChange} name="umur"/>
                            </div>
                            <div>
                                <label>Hoby:</label>
                                <input type="text" placeholder="Masukkan Hoby Anda" className='inpt inpt-password' value={hoby} onChange={handleChange} name="hoby"/>
                            </div>
                            <div>
                                <label>Kemampuan:</label>
                                <input type="text" placeholder="Masukkan Kemampuan Anda" className='inpt inpt-password' value={skils} onChange={handleChange} name="skils"/>
                            </div>
                            <button type='button'onClick={handleSubmit}className='btn btn-login'>Submit</button>
                        </form>
                    </div>)}
                </div>
            </section>
        </>
    )
}

export default Profile