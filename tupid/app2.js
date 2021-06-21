import React from 'react'
import {Link} from 'react-router-dom'

function Dashboard(){

{
    return(
        <div className="container">
          <div className="randy">
          <ul>
           <li > <a href=""> Home    </a>   </li>
           <li><a href="">About  </a></li>
           <li><a href="">Projects</a></li>
           <li><a href="">Contacts</a></li>
           <li> <a href="">blog</a></li>
        <li><Link to="/dash">Login</Link></li>
           </ul> 
              
              </div>  

	<div className="loop">
		<h1> Sign in</h1>

	
<div className="python">
<input type="text" name="Username" placeholder="Username" required/>

<input type="password" placeholder="password" name="Password" required/>

 </div>
<div className="loop-op"> <button type="Submit">Submit</button> 
 </div>
<div className="options"> <p> Not yet register?<Link to="/login">  Create an account!</Link> </p>


</div>
        </div>
        </div>

    );
}
}
export default Dashboard;