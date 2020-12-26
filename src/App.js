import React, {Component} from 'react';
import Cars from "./components/cars/Cars";
import Greeting from "./components/greeting/Greeting";

class App extends Component {

    render() {
        return (
            <div>
                <Cars name={"Ford Focus"} year = {'2017'}/>
                <Cars name={"Audi A8"} year = {'2015'}/>
                <Cars name={"Mazda 3"} year = {'2010'}/>
                <Greeting name="Fancy pants" className="fancy-greeting" id="user-greeting"/>
            </div>
        );
    }
}

export default App;