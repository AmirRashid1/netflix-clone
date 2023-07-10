import React, { useEffect, useState } from 'react'
import logo from './images/logo.png'
import avaterBlue from './images/default-slate.png';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [show, setShow] = useState(false);
  const navigate=useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else{
      setShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',transitionNavBar);
    return()=>window.removeEventListener('scroll',transitionNavBar);
  });

  const colors='bg-black shadow-md shadow-black opacity-90 '

  return (
    <div>
      <div className={`flex h-[4.1rem]  md:h-[3.6rem] z-50 justify-between p-3 w-full duration-150 transition-shadow ${show && colors} fixed`}>
        <img src={logo} alt="netflix " className='w-[5rem] h-[2rem] cursor-pointer' onClick={()=>navigate('/')}/>
        <img src={avaterBlue} alt="Avatar" className='cursor-pointer rounded-md ' onClick={()=>navigate('/profile')}/>
      </div>
    </div>
  )
}

export default Nav;