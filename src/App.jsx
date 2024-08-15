import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignOut from './Pages/SignOut';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Header from './Component/Header';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignUp />} />
          <Route path='/signout' element={<SignOut />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
