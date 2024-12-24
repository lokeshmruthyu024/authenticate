import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div className='Container'>
      <div className="logoandbutton">
        <img src="logo.png" alt="" className='LogoImage' />
      </div>
      <div className="welcome">
        <h2>Create an account</h2>
        <p>Welcome friend, enter your details.</p>
      </div>
      <form action="" className='form'>

        <div className='Entries'>
          <p className='label'>First Name</p>
          <input type="text" className='inputBox' placeholder='Enter First Name' />
        </div>
        <div className='Entries'>
          <p className='label'>Last Name</p>
          <input type="text" className='inputBox' placeholder='Enter Last Name' />
        </div>
        <div className='Entries1'>
          <p className='label'>Phone Number</p>
          <div className='inputBox1'>
            <select name="" id="" className='Select'>
              <option value="IN" id='IN' className='Select'>IN</option>
              <option value="US" id='US' className='Select'>US</option>
              <option value="UK" id='UK' className='Select'>UK</option>
            </select>
            <input type="text" className='spareinputBox' />
          </div>
        </div>
        <div className='Entries'>
          <p className='label'>Email Address(Optional)</p>
          <input type="text" className='inputBox' placeholder='Enter Email address' />
        </div>
        <div className='buttonClass'>
          <button type='submit' className='ButtonClass'>Send OTP</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
