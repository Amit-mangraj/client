import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './component/navbar'
import {BrowserRouter, Route,Switch,useHistory} from 'react-router-dom'
import Home from './component/screens/Home'
import SignIn from './component/screens/Signin'
import Profile from './component/screens/Profile'
import Signup from './component/screens/Signup'
import Createpost from './component/screens/Createpost'
import './App.css';
import { initialstate, reducer } from './reducers/userReducers'
export const Usercontext = createContext()
//this is comment
 const Routing = () => {
  const history= useHistory()
  const {state,dispatch}= useContext(Usercontext)
useEffect(()=>{
const user = JSON.parse(localStorage.getItem("user"))
if(user){
  dispatch({type:"USER",payload:user})
  history.push('/')
}else{
  history.push('/signIn')
}

},[])
  return (
    <div>
      <Switch>
      <Route exact path="/">
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
      </Switch>
    </div>
  );
};
function App() {
 const [state,dispatch] = useReducer(reducer,initialstate)
  return (
    <Usercontext.Provider value={{state,dispatch}}>
         <BrowserRouter>
      <Navbar></Navbar>
     <Routing></Routing>
      </BrowserRouter>
    </Usercontext.Provider>
   
  );
}

export default App;
