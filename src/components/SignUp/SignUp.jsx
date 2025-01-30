/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, saveUser, setCurrentUser, getCurrentUser } from '../../Backend/localStorage';
import { assets } from '../../assets/assets';
import './SignUp.css';


const SignUp = ({ setShowLogin }) => {
const [currState, setCurrState] = useState('Sign in');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');
const [error, setError] = useState('');


const navigate = useNavigate();

useEffect(() => {
localStorage.setItem('currState', currState);}, [currState]);


const handleSignIn = (e) => {
e.preventDefault();
const users = getUsers();
const user = users.find((user) => user.email === email && user.password === password);
if (user) {
  setCurrentUser(user);
  setShowLogin(false);
  navigate('/player');
} else {setError('Invalid email or password');}
};


const handleSignUp = (e) => {
e.preventDefault();
const users = getUsers();
const userExists = users.some((user) => user.email === email);
if (userExists) {
  setError('User already exists, Sign in');
} else {
  const newUser = { name, email, password };
  saveUser(newUser);
  setCurrentUser(newUser);
  setShowLogin(false);
  navigate('/player');
}
};


return (
  <div className='sign-up' id="signup_id">

    <form className='sign-up-container' onSubmit={currState === 'Sign Up' ? handleSignUp : handleSignIn}>
      
      <div className='sign-up-title'>
      <h2>{currState}</h2>
      <img onClick={() => setShowLogin(false)} src={assets.delete_icon} alt='Close' />
      </div>

      <div className='sign-up-input'>
      {currState === 'Sign in' ? (<></>) : (<input type='text' placeholder='your name' value={name}
      onChange={(e) => setName(e.target.value)} required />)}
      <input type='email' placeholder='your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type='password' placeholder='your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>


      {error && <p className='error'>{error}</p>}
      <button type='submit'>{currState === 'Sign Up' ? 'Create Account' : 'Sign in'}</button>
      <div className='sign-up-condition'>
      <input type='checkbox' required />
      <p>By continuing I agree to the terms and conditions</p>
      </div>


      {currState === 'Sign in' ? (<p>Sign Up? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
      ) : (
      <p>Already have an account? <span onClick={() => setCurrState('Sign in')}>Sign in here</span></p>
      )}

    </form>

  </div>
);
};

export default SignUp;