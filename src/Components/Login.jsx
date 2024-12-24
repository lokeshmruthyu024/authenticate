import React from 'react'
import Styles from '../Components/Login.module.css'
const Login = () => {
  return (
    <div className='Container'>
      <div className={Styles.logoandbutton}>
        <img src="logo.png" alt="" className={Styles.LogoImage} />
      </div>
      <div className={Styles.welcome}>
        <p>Login to your account</p>
        <p>Good to see you again, enter your details below to continue.</p>
      </div>
      <form action="" className={Styles.form}>
        <div className={Styles.Entries1}>
          <p className={Styles.label}>Phone Number</p>
          <div className={Styles.inputBox1}>
            <select name="" id="" className={Styles.Select}>
              <option value="IN" id='IN' className={Styles.Select}>IN</option>
              <option value="US" id='US' className={Styles.Select}>US</option>
              <option value="UK" id='UK' className={Styles.Select}>UK</option>
            </select>
            <input type="text" className={Styles.spareinputBox} />
          </div>
        </div>
        <div className={Styles.Entries}>
          <p className={Styles.label}>Your Name</p>
          <input type="text" className={Styles.inputBox} placeholder='Your Name' />
        </div>
        <div className={Styles.buttonClass}>
          <button type='submit' className={Styles.ButtonClass}>Send OTP</button>
        </div>
      </form>
    </div>
  )
}

export default Login
