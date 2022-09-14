import React, {useState, useEffect} from 'react';
import './index.css';
import { useLocation } from 'react-router-dom';
import { Profile as ComponentProfile } from '../../components';
const Profile = () => {
    const location = useLocation();
    const [valueInpt, setValueInpt] = useState({
        name: "Andi Nugraha",
        token: "",
        hoby: "Musik",
        umur: "21",
        skils: "Game, Sport, It, Acounting, Editing.",
        lahir: "Jakarta, 21 June 2001",
    });
    const [isEdit, setIsEdit] = useState(false)
    useEffect(() => {
        if(location.state === undefined || location.state === null){
            window.location.assign('/login')
        }else {
            setValueInpt(prev => {
                return{
                    ...prev,
                    "token": location.state.token
                }
            })
        }
    },[location]);
    const handleEventchange = (e) => {
        console.log('check')
        setValueInpt(prev => {
            return{
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleEventSubmit = (e) => {
        setIsEdit(!isEdit)
    }
    return(
        <>
            <div className='ctn-profile'>
                <div className='chd-profile'>
                    <ComponentProfile name={valueInpt.name} hoby={valueInpt.hoby} umur={valueInpt.umur} lahir={valueInpt.lahir} skils={valueInpt.skils} token={valueInpt.token} handleChange={handleEventchange} handleSubmit={handleEventSubmit} checkEdit={isEdit}/>
                </div>
            </div>
        </>
    )
}

export default Profile