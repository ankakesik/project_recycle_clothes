import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Login from './components/Login';
import Register from "./components/Register";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
// import style from "../src/css/main.scss"

export default function App() {
    return (

        <Router>
            <Switch>
              <Route exact path="/" component={Home} />  
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
            
        
        </Router>
       
    )
}
