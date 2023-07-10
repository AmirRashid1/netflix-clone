import React, { useEffect } from 'react';
import './index.css'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice'
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProfileScreen from './screens/ProfileScreen';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //LogedIn
        dispatch(login(
          {
            uid: userAuth.uid,
            email: userAuth.email
          }
        ))
      } else {
        //LogedOut
        dispatch(logout())
      }
    });
    return unsubscribe;
  }, [dispatch])

  return (
    <div className='bg-black'>
      <Router>
        {!user ? (<LoginScreen />) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route path="/signin" element={<SignInScreen />}></Route>
            <Route path='/signup' element={<SignUpScreen />}></Route>
            <Route path='/profile' element={<ProfileScreen />}></Route>
          </Routes>
        )}

      </Router>
    </div>
  );
}

export default App;
