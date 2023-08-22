import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className='container'>
      <div className='left-nav'>
        <h1>Board.</h1>
      </div>
      <div className='right-container'>
        <div className='title'>
          <h1>Sign-Up</h1>
          <p>Sign up to your account</p>
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
              <button>Sign In</button>
            </div>
        </Form>
        <div className='register'>
          <p>Already have an account?</p><Link to="/">Log In</Link>
        </div>    
      </div>
    </div>
  )
}

export default SignUp;