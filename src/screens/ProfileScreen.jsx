import React from 'react'
import avaterBlue from '../images/default-slate.png';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import PlansScreen from './PlansScreen';
import { useNavigate } from 'react-router-dom';
function ProfileScreen() {
    const user = useSelector(selectUser);
    const navigate=useNavigate();

    return (
        <div>
            <Nav />
            <div className='pt-10'>
                {/* <PlansScreen/> */}
                <div className='border-[2px] border-gray-500 m-auto mt-5 rounded-md md:w-[37rem] w-[21rem] md:h-[32rem] h-[34rem] '>
                    <div className='text-white float-left mb-[16rem] ml-4 md:w-[10rem] w-[8rem]'>
                        <h1 className='md:text-[2rem] text-[1.2rem] mb-5 md:mb-0'>Edit Profile</h1>
                        <img src={avaterBlue} alt="profile" className='w-[5rem] rounded-md'  />
                        <h1 className='mt-3'>Welcome {user.displayName} User</h1>
                    </div>
                    <div className='text-white mt-12 ml-28 md:space-y-6 space-y-3'>
                        <p className='bg-gray-500 h-8 rounded-l-md font-bold '>{user.email}</p>
                        <h2>Plans: (Current plan: Premium)</h2>
                        <h3>Renewal date: 07/09/2023</h3>

                        <div className=' mb-10 z-50 space-y-6'>
                            <div className='flex md:space-x-[10.6rem] space-x-4 '>
                                <h1>Netflix Standard<p>1080p</p></h1>
                                <span><button className='bg-red-600 hover:bg-red-800 p-1 md:w-[8rem] w-[6rem] mt-5 rounded-md '>Subscribe</button></span>
                            </div>
                            <div className='flex md:space-x-[12.2rem] space-x-11'>
                                <h1>Netflix Basic <p>480p</p></h1>
                                <span><button className='bg-red-600 hover:bg-red-800 p-1 md:w-[8rem] w-[6rem] mt-4 rounded-md' >Subscribe</button></span>
                            </div>
                            <div className='flex md:space-x-[10.6rem] space-x-4'>
                                <h1>Netflix Premium<p>4k+ HDR</p></h1>
                                <span><button className='bg-gray-600 hover:bg-gray-700 p-1 md:w-[8rem] w-[6.5rem] mt-4 rounded-md disabled:cursor-not-allowed' disabled>Subscribe</button></span>
                            </div>
                        </div>

                        <button onClick={() => auth.signOut()} className='bg-red-600 p-2  md:w-[28rem] w-[12rem] rounded-md'>SignOut</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;