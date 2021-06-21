import { render } from "react-dom";
import { useState } from "react/cjs/react.development";
import Register from "./Components/parts/login";
import './index.css';
import Dashboard from "./Components/Dashboard";
import Footer from './try/footer'
import Back from "./Components/back";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './style.css';
import './Styles.css';
import Conditional from "./try/conditional";
import Proucts from "./try/proucts";

function App(){


        return(
          
           <div className="body">
          <Router>

              <Switch>
                <Route path="/login" component={Register}/>
                <Route path="/back" component={Back} />
                <Route path="/dash" component={Dashboard}/>
                <Route path="/footer" component={Footer}/>
                <Route path="/conditional" component={Conditional}/>
                <Route path="/proucts" Component={Proucts}/>
                
              </Switch>
          </Router>
        
            
           </div> 
      
      
         
    


        );
    }
