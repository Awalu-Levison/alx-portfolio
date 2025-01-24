/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getCurrentUser } from './Backend/localStorage';
import SignUp from './components/SignUp/SignUp';
import Home from './pages/Home/Home';
import Player from './Backend/Player';
import ProtectedRoute from './Backend/ProtectedRoute';



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
        </Routes>
        </div>
    </>
);
};



export default App;
