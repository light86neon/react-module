import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";

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
                            <li>
                                <Link to={`/posts`}> to all posts</Link>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <Switch>
                        <Route path={'/users'} render={() => <AllUsers/>}/>
                        <Route path={'/posts'} render={() => <AllPosts/>}/>
                    </Switch>
                    <hr/>
                </Router>
            </div>
        );
    }
}

export default App;