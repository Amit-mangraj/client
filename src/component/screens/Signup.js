// @flow 
import  React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';
 const Signup = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     const history = useHistory()
     const[name, setName]= useState("")
     const[email, setEmail]= useState("")
     const[password, setPassword]= useState("")

        // // POST request 
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({name:name,email:email,password:password})
        // };
    //this is comment
     const Postdata =()=>{
         if(!re.test(email)){
          M.toast({html: 'Please Give Valid Email !', classes: '#f44336 red darken-6'})
          return 
        }
         fetch("/signup",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name:name,email:email,password:password})
        }).then(res=>res.json()).
        then(data=>{ 
            if(data.error)
            {
                M.toast({html: data.error, classes: '#f44336 red darken-6'})
            }
            else
            {
                M.toast({html: data.messsage, classes: '#4caf50 green darken-6'})
                history.push('/signIn')
            }
        })

     } 
    return (
        <div>
          <div className="mycard input-field ">
            <div className="card auth-card">
            <h2>Instagram</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="waves-effect waves-light btn-large #26c6da cyan darkenen-1" onClick={()=>Postdata()}>
           SignUp
            </button><br></br>
            <h3>
            <Link to="/signIn">Already have an account?</Link>
            </h3>
          
            </div>
        </div>
        </div>
    );
};
export default Signup;