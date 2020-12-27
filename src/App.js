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

    deleteHandler(index){
       const cars = this.state.cars.concat()

        cars.splice(index,1)

        this.setState({
           cars
        })

    }

    onChangeName(name, index) {
        console.log(name, index)
        const car = this.state.cars[index]
        car.name = name

        // const cars = this.state.cars.concat()
        const cars = [...this.state.cars.concat()]

        cars[index] = car

        this.setState ({
            cars: cars
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
                        onDelete={this.deleteHandler.bind(this, index)}
                        onChangeName={event => this.onChangeName(event.target.value, index)
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
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop:'20px'
                }}>
                    {cars}
                </div>


            </div>
        );
    }
}

export default App;