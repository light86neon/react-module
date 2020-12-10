import React, {Component} from 'react';
import User from "../user/User";
import UserService from "../../services/UserService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullUser from "../full-user/FullUser";

class AllUsers extends Component {

    userService = new UserService();
    state = {users : []};

    async componentDidMount() {
        let {match : {params: {id}}} = this.props;
        let users = await this.userService.users();
        this.setState({users});
    }


    render() {
       let {users} = this.state;
       let {match: {url}} = this.props;
        return (
            <div>
                {
                    users.map(value => <User item={value}  key = {value.id}/> )
                }
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=> {
                        const {match:{params:{id}}} = props;
                    return <FullUser {...props} key = {id}/>;
                    }}/>

                </Switch>
            </div>
        );
    }
}

export default withRouter(AllUsers);