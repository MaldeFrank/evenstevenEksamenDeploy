import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoginScreen from './components/LoginScreen';
import { useState } from 'react';
import SignupScreen from './components/SignupScreen';
import NewEvent from './components/NewEvent';
import Events from './components/Events';
import EventDetails from './components/EventDetails';

function App() {

  const [loggedIn, setIsLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    return storedLoggedIn ? storedLoggedIn === 'true' : false;
  });

  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn.toString());
    console.log(localStorage.getItem('loggedIn'));
  }, [loggedIn]);

  return (
    <BrowserRouter basename='/'>
      <Routes>
      
        <Route
          path="/"
          element={loggedIn === true ? <Navigate to="/home" /> : <LoginScreen setIsLoggedIn={setIsLoggedIn} />}
        />
         
         <Route path="/signup" element={<SignupScreen/>}/>

          {/*Parent route*/}
         <Route path="/home" element={loggedIn === true ? <MainLayout setIsLoggedIn={setIsLoggedIn}></MainLayout> : <Navigate to="/" />}>

         <Route path="newevent" element={<NewEvent/>} />
         <Route path="events" element={<Events/>}/>
         <Route path="events/:id" element={<EventDetails/>}/>
         
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
