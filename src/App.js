import React from 'react';
import './App.css';
// import {BrowserRouter as Router, Switch} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Customers from "./components/Customers";

function App() {
    return (
        <Router>
            <Route>
                <Switch>
                    <Route exact path="/customers" component={Customers}/>
                </Switch>
            </Route>
        </Router>
    );
}
 
export default App;
