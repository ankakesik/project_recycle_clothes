import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
    return (

        <Router>
            <Switch>
              <Route exact path="/" component={Home} />  
            </Switch>
            
        
        </Router>
       
    )
}
