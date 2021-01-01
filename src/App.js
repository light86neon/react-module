import React, {Component} from 'react';
import AllUsersComponent from "./components/all-users/AllUsersComponent";
import AllPostsComponent from "./components/all-posts/AllPostsComponent";
import AllComments from "./components/all-comments/AllComments";

class App extends Component {

    render() {
        //mistake console.log(this.users)
        return (
            <div>
                <AllUsersComponent/>
                <AllPostsComponent/>
                <AllComments/>
            </div>
        );
    }
}

export default App;