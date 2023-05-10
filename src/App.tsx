import React from 'react';
import Header from './components/header/Header'
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import AboutUs from './pages/aboutus/AboutUs';
import ContactUs from './pages/contactus/ContactUs';
import Write from './pages/write/Write';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';

function App() {
  const user=false
  return (
   <>
  <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/write" element={user?<Write/>:<Register/>}/>
        <Route path="/login" element={user?<Home/>:<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer/>
  </BrowserRouter>
   </>
  );
}

export default App;
