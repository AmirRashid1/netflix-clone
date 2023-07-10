import React, { useRef, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import SignInScreen from './SignInScreen';
import backGround from '../images/hero.jpg';
import netflix from '../images/logo.png';

function SignUpScreen() {
  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // ...
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        
          navigate('/signin');  
          alert('signup successfully')
        // // Store first and last name
        // const user = auth.currentUser;
        // user
        //   .updateProfile({
        //     displayName: `${firstName} ${lastName}`,
        //   })
        //   .then(() => {
        //     setSignup(true)
            
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      })
      .catch((err) => alert('Please enter correct details to sign up.'));
  };
  // ...


  return (
    <div>
      {/* <img src={backGround} className='absolute h-[100%] w-[100%] bg-center filter md:blur-[3px] blur-[4px] border-none' alt='netflix background' />
    <div className='flex relative justify-between p-2'>
        <img src={netflix} className='md:w-[7rem] w-[5rem] h-8  shadow-sm cursor-pointer ' alt='netflix' />
    </div> */}
      <div className=" ">
        <div className={` ${signup ? 'hidden' : ''} relative bg-black text-white md:w-[34rem] w-[95%] h-[24rem] md:h-[25rem] m-auto rounded-md bg-opacity-80`}>
          <form action="#" className="md:ml-10 ml-5">
            <h1 className="text-center text-[2rem] mb-2 pt-7">Sign Up</h1>
            <div className="flex ">
              <div className='mr-2'>
                <label htmlFor="firstname">FirstName*</label><br />
                <input type="text" name="firstname" className="h-[2.3rem] rounded-sm text-black w-[8rem] md:w-[14rem]" required />
              </div>
              <div>
                <label htmlFor="lastname">LastName*</label><br />
                <input type="text" name="lastname" className="h-[2.3rem] rounded-sm text-black w-[8rem] md:w-[14rem]" required />
              </div>
            </div>
            <label htmlFor="email" className="mr-2">Email*</label><br />
            <input ref={emailRef} type="email" required placeholder="example@xyz.com" className="h-[2.3rem] w-[16.5rem] md:w-[28.8rem] rounded-sm mb-2 p-1 text-black" /><br />
            <label htmlFor="password" className="mr-2">Password*</label><br />
            <input ref={passwordRef} type="password" required className="h-[2.3rem] md:w-[28.8rem] w-[16.5rem] rounded-sm mb-2 p-1 text-black" /><br />
            <button onClick={register} type="submit" className="bg-red-600 mt-2 h-[2.3rem] md:w-[28.8rem] w-[16.5rem] rounded-md font-bold hover:bg-red-800">Sign Up</button><br />
            <span className="m-3 opacity-75">Already have an account?</span>
            <span className="hover:underline cursor-pointer" onClick={() => setSignup(true) || navigate('/signin')}>Sign In now</span>
          </form>
        </div>

        {signup ? <SignInScreen /> : ""}
      </div>
    </div>
  );
}

export default SignUpScreen;
