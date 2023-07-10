import React, { useState } from 'react'
import netflix from '../images/logo.png';
import backGround from '../images/hero.jpg'
import SignInScreen from './SignInScreen';
function LoginScreen() {
  const[signIn,setSignIn]=useState(false); 
  
  let display;
  if(signIn===true){
     display="hidden";
  }

  return (
    <div>
      <img src={backGround} className='absolute h-[100%] w-[100%] bg-center filter md:blur-[3px] blur-[4px] border-none' alt='netflix background' />
      <div className=' relative font-semibold'>
        <div className='flex justify-between p-2'>
          <img src={netflix} className='md:w-[7rem] w-[5rem] h-8  shadow-sm cursor-pointer ' alt='netflix' />
          <button onClick={()=>setSignIn(true)} className={`w-[5rem] p-2 rounded-md ${display} hover:bg-red-700 shadow-sm cursor-pointer text-white bg-red-600`} >Sign In</button>
        </div>

       {signIn ? (<SignInScreen/>):(
         <div className='text-white text-center  md:mt-[12rem] mt-[7rem] justify-center'>
         <h1 className='text-[2rem]'>Unlimited films,Tv programmes and more..</h1>
         <h2 className='text-[1.3rem]'>Watch anywhere. Cancel anytime.</h2>
         <p className='m-3'>Ready to wach? Enter your email to create or restart your membership.</p>
         <form action="#">
           <input type="email" name="email" className='md:w-[26rem] md:h-[2.52rem] rounded-l-md  w-[15rem] h-[2rem] p-1 text-black' placeholder='Enter email address' required />
           <button onClick={()=>setSignIn(true)} type='submit' className='bg-red-600 md:w-[7rem] md:h-[2.6rem]  rounded-r-md  h-[2.1rem] p-1'>GET STARTED</button>
         </form>
       </div>
       )}

      </div>
    </div>
  )
}

export default LoginScreen