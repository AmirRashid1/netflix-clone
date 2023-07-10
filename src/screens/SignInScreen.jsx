import React, { useRef, useState } from 'react'
import SignUpScreen from './SignUpScreen';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import backGround from '../images/hero.jpg';
import netflix from '../images/logo.png';

function SignInScreen() {
    const [signup, setSignup] = useState(false);
    let display;
    if (signup === true) {
        display = "hidden";
    }
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            navigate('/')
        }).catch(err => alert("Error email or password is incorrect please check before login!"));
    }
    return (
        <div>
            {/* <img src={backGround} className='absolute h-[100%] w-[100%] bg-center filter md:blur-[3px] blur-[4px] border-none' alt='netflix background' />
                <div className='flex relative justify-between p-2'>
                    <img src={netflix} className='md:w-[7rem] w-[5rem] h-8  shadow-sm cursor-pointer ' alt='netflix' />
                </div> */}
                <div className="">
                    <div className={` ${display} relative bg-black text-white md:w-[28rem] w-[95%]  h-[20rem] md:h-[23rem] m-auto rounded-md bg-opacity-80  `}>
                        <form action="#" className='md:ml-10 ml-6  '>
                            <h1 className='text-center text-[2rem] mb-2 pt-7 ' >Sign In</h1>
                            <label htmlFor="email" className='mr-2'>Email*</label><br />
                            <input ref={emailRef} type="email" required placeholder='example@xyz.com' className='h-[2.3rem] w-[17rem] md:w-[21rem] rounded-sm mb-2 p-1 text-black' /><br />
                            <label htmlFor="password" className='mr-2'>Password*</label><br />
                            <input ref={passwordRef} type="password" required className='h-[2.3rem] md:w-[21rem]  w-[17rem] rounded-sm mb-2 p-1 text-black' /><br />
                            <button onClick={signIn} type='submit' className=' bg-red-600 mt-2 h-[2.3rem] md:w-[21rem] w-[17rem] rounded-md font-bold hover:bg-red-800'>Login</button><br />
                            <span className='m-2 opacity-75'>Don't have account?</span><span className='hover:underline cursor-pointer' onClick={() => navigate('/signup') || setSignup(true)}>SignUp now</span>
                        </form>
                    </div>

                    {signup ? (<SignUpScreen />) : ""}
                </div>
            </div>
            )
}

            export default SignInScreen