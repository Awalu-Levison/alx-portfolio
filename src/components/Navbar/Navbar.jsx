/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { clearCurrentUser, getCurrentUser } from '../../Backend/localStorage';


const Navbar = ({ setShowLogin }) => {
  const [navlist, setNavlist] = useState("home");
  const navigate = useNavigate();
  const isLoggedIn = getCurrentUser() !== null;
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const handleLogout = () => {
    clearCurrentUser();
    navigate('/');
  };


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  /*const handleButtonClick = () => {
  if (isLoggedIn) { clearCurrentUser(); navigate('/home');
  } else { setShowLogin(true);}
  };*/

  return (
    <div>
      <div className="navbar">
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={() => setNavlist("home")} className={navlist === "home" ? "active" : ""}>Home</Link>
          <a href='#explore_set' onClick={() => setNavlist("explore")} className={navlist === "explore" ? "active" : ""}>Explore</a>
          <a href='#about_set' onClick={() => setNavlist("contact-us")} className={navlist === "contact-us" ? "active" : ""}>About Us</a>
          
          {isLoggedIn && (
            <Link to='/player' onClick={() => setNavlist("player")} className={navlist === "player" ? "active" : ""}>
              <img src={assets.radio} alt="radio" className="icon radio-icon" />
            </Link>
          )}
  
          <div className="user-menu">
            {isLoggedIn ? (
              <div>
                <img src={assets.user_icon2} alt='User' onClick={toggleDropdown} className="icon user-icon" />
                {dropdownOpen && (
                  <div className='dropdown-menu'>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={() => setShowLogin(true)}> Sign in </button>
            )}
          </div>
          
        </ul>
      </div>
    </div>
  );
  
}

export default Navbar