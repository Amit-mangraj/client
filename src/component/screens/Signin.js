
import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';
 const Signin = () => {
    const history = useHistory()
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")
    const Postdata =()=>{
        if(!re.test(email)){
            M.toast({html: 'Please Give Valid Email !', classes: '#f44336 red darken-6'})
            return 
          }
        fetch("/signin",{
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({email:email,password:password})
       }).then(res=>res.json()).
       then(data=>{ 
           console.log(data)
           if(data.error)
           {
               M.toast({html: data.error, classes: '#f44336 red darken-6'})
           }
           else
           {
               M.toast({html: "Signed In succussesfully", classes: '#4caf50 green darken-6'})
               history.push('/')
           }
       })

    } 
    return (
        <div className="mycard input-field ">
            <div className="card auth-card">
            <h2>Instagram</h2>
            <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" id="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="waves-effect waves-light btn-large #26c6da cyan darkenen-1" onClick={()=>{Postdata()}}>
                Login
            </button>
            <h3><Link to="/signup">Don't Have Account ?</Link></h3>
            
            </div>
        </div>
    );
};

export default Signin