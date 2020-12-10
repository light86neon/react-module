import React, {Component} from 'react';
import UserService from "../../services/UserService";

class FullUser extends Component {

    state = {users: null};
    userService = new UserService();

    async componentDidMount() {
    // await this.userService.user(id);
        let {id} = this.props;
        console.log(id)
    }

    render() {
        let {item} = this.props;
        let {user} = this.state;
        return (
            <div>
                    {user &&  <div>{item.id} - {item.name} - {item.username} - {item.email}</div>}
            </div>
        );
    }
}

export default FullUser;