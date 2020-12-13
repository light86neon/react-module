import React, {Component} from 'react';
import UserService from "../../services/UserService";
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class FullUser extends Component {


    userService = new UserService();
    state = {users: null};


    async componentDidMount() {
        const {userId} = this.props;
        const user = await this.userService.user(userId);
        this.setState({user});
    }

    render() {

        const {user} = this.state;
        const {match : {url}} = this.props;


        return (
            <div>
                 {user &&
            <div>{user.id} - {user.name} - {user.username} - {user.email} -
                <Link to={url + '/posts'}>show user posts</Link>
            </div>}
              <hr />
                <Switch>
                    <Route path={'/users/:id/posts'} render={() => {
                        console.log('adasd');
                        return 'ccccc'
                    }

                    } />


                </Switch>
                <hr />
            </div>
        );
    }
}

export default withRouter (FullUser);