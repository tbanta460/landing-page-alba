import React, { useState, useEffect } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { Login as ComponentLogin } from '../../components';
const Login = () => {
    const navigate = useNavigate()
    const [valueLogin, setValueLogin] = useState({
        email: "eve.holt@reqres.in",
        password:""
    });
    const [token, setToken] = useState(undefined);
    const [isError, setIsError] = useState("")
    const handleEventChange = (e) => {
        setValueLogin(prev => {
            return{
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    useEffect(() => {
        if(token !== undefined && token.error !== "user not found" ){
            navigate({
                pathname: `/profile/${token.token}`,
            }, {state:{token: token.token}})
        }
    }, [token, navigate])
    const handleEventSubmit = async (e) => {
        const newOb = {
            email: valueLogin.email,
            password:valueLogin.password
        }
        if(newOb.password !== ""){
            fetch('https://reqres.in/api/login', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(newOb)
            })
            .then(res => res.json())
            .then(reslt => setToken(reslt))
            .catch(error => setIsError(error.response))
        }else {
            setIsError("Form Tidak Boleh Kosong")
        }
        
    }
    return(
        <>
            <div className='ctn-login'>
                <div className='chd-login'>
                    <ComponentLogin checkError={isError} password={valueLogin.password} email={valueLogin.email} handleChange={handleEventChange} handleSubmit={handleEventSubmit} loginError={isError}/>
                </div>
            </div>
        </>
    )
}

export default Login