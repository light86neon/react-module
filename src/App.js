import React, {Component} from 'react';
import AllUsersComponent from "./components/all-users/AllUsersComponent";

class App extends Component {

    render() {
        //mistake console.log(this.users)
        return (
            <div>
                <AllUsersComponent/>

            </div>
        );
    }
}

export default App;