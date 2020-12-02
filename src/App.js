import React from 'react';
import Navbar from './component/navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './component/screens/Home'
import SignIn from './component/screens/Signin'
import Profile from './component/screens/Profile'
import Signup from './component/screens/Signup'
import Createpost from './component/screens/createpost'
import './App.css';
function App() {
  return (
      <BrowserRouter>
      <Navbar></Navbar>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/signIn">
        <SignIn></SignIn>
      </Route>
      <Route path="/signup">
      <Signup></Signup>
      </Route>
      <Route path="/profile">
       <Profile></Profile>
      </Route>
      <Route path="/create">
       <Createpost></Createpost>
      </Route>
      </BrowserRouter>
  );
}

export default App;
