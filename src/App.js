import React, {Component} from 'react';
import Cars from "./components/cars/Cars";


class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi A8', year: 2015},
            {name: 'Mazda 3', year: 2010}
        ],
        pageTitle: 'React Components',
        showCars : false
    }

    toggleCarsHandler = () => {

        this.setState({
            showCars: !this.state.showCars
            // showCars: true
        })
    }

    changeTitleHandler = pageTitle =>{
    this.setState({
                      pageTitle
                  })
    }
    render() {
        const divStyle = {
            textAlign: 'center'
        }
        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Cars
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={() => this.changeTitleHandler(car.name)
                        }
                    />
                )
            })
        }
        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>

                <button
                    onClick={this.toggleCarsHandler}
                >Toggle Cars </button>

                {cars}


            </div>
        );
    }
}

export default App;