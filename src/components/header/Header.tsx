import React from 'react'
import '../header/header.css';
// import userImg from '../../assets/userImg.png'
import { FaTwitterSquare,FaFacebookSquare,FaGooglePlusSquare,FaGitSquare,FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header:React.FC = () => {
  const user=false;
  return (
    <div className='mainhHeader'>
      <div className='socialMedia'>
        <FaTwitterSquare/>
        <FaFacebookSquare/>
        <FaGooglePlusSquare/>
        <FaGitSquare/>
      </div>
      <div className='navbarMenu'>
        <nav className='navList'>
          <li><Link className='nav-link' to='/'>Home</Link></li>
          <li><Link className='nav-link' to='/users'>Users</Link></li>
          <li><Link className='nav-link' to='/about'>About Us</Link></li>
          <li><Link className='nav-link' to='/contact'>Contact Us</Link></li>
          <li><Link  className='nav-link' to='/write'>Write</Link></li>
        </nav>
      </div>
      <div className='userTopRight'>
        <ul className='userTopRightList'>
        {user?
        <li><Link  className='nav-link' to='/profile'><img className='user-profile' src={'../assets/userImg.png'} alt='user profile'/></Link></li>:  
        <>
        <li><Link  className='nav-link' to='/login'>Login</Link></li>
        <li><Link  className='nav-link' to='/register'>Register</Link></li>
        </>
        }
          <li><FaSearch/></li>
        </ul>
      </div>
    </div>
  )
}

export default Header