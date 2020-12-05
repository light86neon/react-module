import React, {Component} from 'react';
import UserComponent from "../user/UserComponent";


class AllUsersComponent extends Component {
    // mistake
    // users = [];
    state = {users: []};
//якщо не буде пустого масиву не зможемо використати методи масив(map)


    componentDidMount() {


        fetch('https://jsonplaceholder.typicode.com/users ')
            .then(value => value.json())
            .then(usersFromAPI =>{
                this.setState({users: usersFromAPI})
            });
    }

    render() {
        let {users}  = this.state;

// console.log(this.state)

        return (
            <div>
                <h1>All Users Page</h1>
                {
            users.map(value => (<UserComponent
                item={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default AllUsersComponent;