import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllUsers from "./components/all-users/AllUsers";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={'/users'}>
                                to all users
                            </Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path = {'/users'} render = {(props)=><AllUsers />}/>
                    </Switch>
                    <hr/>
                </div>
            </Router>
        );
    }
}

export default App;