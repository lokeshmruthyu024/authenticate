import React from 'react'
import Styles from '../Components/OTPPage.module.css';
const OTPPage = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.logoandbutton}>
        <img src="logo.png" alt="" className={Styles.LogoImage} />
      </div>
      <div className={Styles.OTPBox}>
        <div className={Styles.OTPsent}>
          <p>We have sent OTP to phone number</p>
        </div>
        <div className={Styles.EnterOTP}>
          <div className={Styles.enterbanner}><p>Enter OTP</p></div>
          <div className={Styles.OTPinput}>
            <input type="text" className={Styles.input} />
            <input type="text" className={Styles.input} />
            <input type="text" className={Styles.input} />
            <input type="text" className={Styles.input} />
          </div>
          <div className={Styles.TimeRemainingandResent}>
            <div className={Styles.TimeLeft}>
              <p>Time Remaining</p>
            </div>
            <div className={Styles.resendButton}>
              <button className={Styles.ResendOTP}>Resend OTP</button>
            </div>
          </div>
        </div>
        <div className={Styles.buttonClass}>
          <button type='submit' className={Styles.ButtonClass}>Verify and Proceed</button>
        </div>
      </div>
    </div >
  )
}

export default OTPPage
