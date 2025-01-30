/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getCurrentUser } from './Backend/localStorage';
import SignUp from './components/SignUp/SignUp';
import Home from './pages/Home/Home';
import Player from './Backend/Player';
import ProtectedRoute from './Backend/ProtectedRoute';
import Terms from './components/Terms/Terms';
import PrivacyPolicy from './components/Privacy Policy/PrivacyPolicy';


const App = () => {
const [showLogin, setShowLogin] = useState(false);
const isLoggedIn = getCurrentUser() !== null;
const user = getCurrentUser();


return (
    <>
        {showLogin && <SignUp setShowLogin={setShowLogin} />}
        <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp setShowLogin={setShowLogin} />} />
        <Route path='/player' element={isLoggedIn ? <Player /> : <Navigate to='/player' />} />
        <Route path="/" element={user ? <Navigate to="/player" /> : <Home />} />
        <Route path="/player" element={ <ProtectedRoute> <Player /> </ProtectedRoute>} /> 
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        </div>
    </>
);
};



export default App;
