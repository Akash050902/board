import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import google from "../Media/google-icon 1.png"
import apple from "../Media/apple 1.png"
import "./Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
    <div className='container'>
      <div className='left-nav'>
        <h1>Board.</h1>
      </div>
      <div className='right-container'>
        <div className='title'>
          <h1>Sign-In</h1>
          <p>Sign in to your account</p>
        </div>
        <div className='button-container'>
          <button className='btn' onClick={handleGoogleSignIn}>
          <div className='icon'><img src = {google} alt="google" /></div>
          <div className='text'>Sign in with Google</div>
          </button>
          <button className='btn'>
            <div className='icon'><img src = {apple} alt="apple"/></div>
            <div className='text'>Sign in with Apple</div>
          </button>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="form" onSubmit={handleSubmit}>
            <div className="input-control">
                <label for="username">Email Address</label>
                <input id="email" name="email" type="text" required 
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input-control">
                <label for="password">Password</label>
                <input id="password" name="password" type="password" 
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='input-control'>
            <Link to="/">Forgot password</Link>
            </div>
            <div className='input-control'>
              <button>Sign In</button>
            </div>
        </Form>
        <div className='register'>
          <p>Dont have an account?</p><Link to="/signup">Register here</Link>
        </div>    
      </div>
    </div>
  )
}

export default Login;