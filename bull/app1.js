import React,{useRef} from 'react';
import { useState } from 'react/cjs/react.development';
import {Link} from 'react-router-dom'



function Register(){
    const usernameRef=useRef()
    const emailRef=useRef()
    const passwordRef=useRef()
    const confirmPasswordRef=useRef()
  


const [error, setError]= useState("");    
const Submit=(e)=>{
  e.preventDefault()

}

return(
  
<div className="Rfront">
    
    <div className="header">
       <ul>
           <li > <a href="/back"> Home    </a>   </li>
           <li><a href="footer">About  </a></li>
           <li><a href="conditional">Projects</a></li>
           <li><a href="proucts">Contacts</a></li>
           <li> <a href="">blog</a></li>
        <li><Link to="/dash">Login</Link></li>
           </ul> 
</div>
     <div className="in">
         <h2>Register</h2>
         </div>   
<form >

    <div className="Lfront">
    <label id="username">Username: </label>
    <input type="text" ref={usernameRef}  placeholder="username" name="username" required/>
    </div>
    <div className="Lfront">
        <label id="email">Email: </label>
        <input type="text" ref={emailRef} name="email"  placeholder="email" required/>
    </div>
    <div className="Lfront">
    <label id="password">Password: </label>
    <input type="password" ref={passwordRef} name="password"  placeholder="password" required/>
</div>
<div className="Lfront">
    <label id="confirmpassword">Confirm Password: </label>
    <input type="password" ref={confirmPasswordRef} name="confirm Password"  placeholder="confrirm Password" required/>
</div>

<div className="footer">
     <button type="Submit" className="help">Submit</button>
</div>


</form>
</div>
);

}
export default Register;