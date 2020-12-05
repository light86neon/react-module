import React, {Component} from 'react';
import UserComponent from "../user/UserComponent";
import './AllUsers.css'

class AllUsersComponent extends Component {
    // mistake
    // users = [];
    state = {users: [], classState :'one'};
//якщо не буде пустого масиву не зможемо використати методи масив(map)
    // flag = false
    // classState = 'one';
flag = false;
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users ')
            .then(value => value.json())
            .then(usersFromAPI =>{
                this.setState({users: usersFromAPI})
            });
    }
    changeColor = ()=>{
        // console.log("...");
        // if(this.flag){
        //     this.classState = 'one'
        // }else{
        //     this.classState = 'two'
        // }
        // this.flag = !this.flag
        // console.log(this.classState, this.flag)

        if(this.flag){
            this.setState({classState: 'one'});
        } else {
            this.setState({classState: 'two'});
        }
        this.flag = !this.flag;
    };
    render() {
        let {users,classState} = this.state;
// console.log(this.state)
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}>All Users Page</h1>
                {
            users.map(value => (<UserComponent
                item={value} key={value.id}/>))
                }
            </div>
        );
    }
}

export default AllUsersComponent;