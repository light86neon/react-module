import React, {Component} from 'react';
import AllUsers from "./components/component/user/AllUsers";
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <div className='users'> <AllUsers/></div>
            </div>
        );
    }
}

export default App;