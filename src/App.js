import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllUsers from "./components/all-users/AllUsers";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to={`/users`}> to all users</Link>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <Switch>
                        <Route path={'/users'} render={() => <AllUsers/>}/>
                    </Switch>
                    <hr/>
                </Router>
            </div>
        );
    }
}

export default App;