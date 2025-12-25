import React from 'react'
import "./LogIn.css"
import LoginCard from '@/Components/LoginCard/LoginCard'
import loginBg from '../../assets/images/login_bg.png';
import loginImg from '../../assets/images/loginImg.png'


const LogIn = () => {
  return (
    <div className='login_section' >
        <div className="loginCard_container">
            <div className='loginImg'>
              <img src={loginImg} alt="" />
            </div>
            <div className="login_card">
              <LoginCard/>
            </div>
            
        </div>
    </div>
  ) 
}

export default LogIn