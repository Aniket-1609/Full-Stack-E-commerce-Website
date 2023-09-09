import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{},dispatch]=useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser){
        //user just logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user : authUser
        }) 

      }
      else{
        //user is logged out
          dispatch({
            type: 'SET_USER',
            user:null
          })
      }
    })
  },[])
  return (
    
    <div className='app'> 

        <Routes>
          <Route exact path='/' element={<div><Header/><Home/></div>}/>
        
          <Route path='/checkout' element={<div><Header/><Checkout/></div>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/payment' element={<div><Header/><Payment/></div>}/>
        </Routes>
    </div>
      

  );
}

export default App;
