import React from 'react';
import Logo from '../../img/logo.png';
import "./Auth.css";

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>JUST Social Media</h1>
                <h4>Learn , Explore and Research</h4>
            </div>
        </div>
        {/* Right Start */}
            {/* <SignUp/> */}
            <Login/>
        {/* Right Ends */}
        
    </div>
  )
}
function Login(){
    return(
        <div className="a-right" style={{ width:'25%' }}>
            <form action="" className="infoForm authForm" style={{ width:'100%' }}>
                <h3>Login</h3>
                <div className="form-group">
                    <input type="text" placeholder='@username' className="infoInput" name="username" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Password' className="infoInput" name="password" />
                </div>
                <hr/>
                <button className="button infoButton" type='submit'>Login</button>
            </form>
            <hr/>
            <div className='formEnd'>
            <span style={{ color:"var(--gray)",fontSize:"12px" }}>Don't Have an account? Signup!</span>
            </div>
        </div>
    )
}
function SignUp(){
    return(
        <div className="a-right authForm">
            <form action="" className="infoForm">
                <h3>Sign Up</h3>
                <div className="form-group">
                    <input type="text" placeholder='First Name' className="infoInput" name="firstname" />
                    <input type="text" placeholder='Last Name' className="infoInput" name="lastname" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='@username' className="infoInput" name="username" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Password' className="infoInput" name="password" />
                    <input type="text" placeholder='Confirm Password' className="infoInput" name="confirmpassword" />
                </div>
                <hr/>
                <button className="button infoButton" type='submit'> Signup</button>
            </form>
            <hr/>
            <div className='formEnd'>
            <span style={{ color:"var(--gray)",fontSize:"12px" }}>Allready have an account ? Login!</span>
            </div>
        </div>
    )
}

export default Auth