import React, {Component} from 'react';
import AllUsers from './components/all-users/AllUsers';
import AllPosts from './components/all-posts/AllPosts';
import AllComments from "./components/all-comments/AllComments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>
                            users
                        </Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>
                            posts
                        </Link>
                    </div>
                    <div>
                        <Link to={'/comments'}>
                            comments
                        </Link>
                    </div>
                    <hr/>
                    <Switch>
                        <Route path={'/users'} component={AllUsers}/>
                        <Route path={'/posts'} component={AllPosts}/>
                        <Route path={'/comments'} component={AllComments}/>

                    </Switch>
                    <hr/>
                </div>
            </Router>
        );
    }
}

export default App;