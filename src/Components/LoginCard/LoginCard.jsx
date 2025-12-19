import React from 'react'
import "./loginCard.css"
import logo from "../../assets/images/logo.png";


const LoginCard = () => {
  return (
    <div className="loginCard">
      <div className="login_head">
        <img src={logo} alt="" />
        <p>Feel the fragnance of Confidence</p>
      </div>
      <div className="login_inputs">
        <input type="email" placeholder='Email' className='input_field'/>
        <input type="password" placeholder='Password' className='input_field'/>
      </div>
      <div className="login_remember">
        <div className="remember">
          <input type="checkbox" />
        <p>Remember for 30 Days</p>
        </div>
        <div className="forget">
          <p>Forget Password?</p>
        </div>

      </div>
      <button className="login_btn">Login</button>
    </div>


  )
}

export default LoginCard