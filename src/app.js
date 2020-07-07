import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Login from './components/Login';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
// import style from "../src/css/main.scss"

export default function App() {
    return (

        <Router>
            <Switch>
              <Route exact path="/" component={Home} />  
              <Route path="/login" component={Login} />
            </Switch>
            
        
        </Router>
       
    )
}
