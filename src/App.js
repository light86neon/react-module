import React, {Component} from 'react';
import UsersComponent from "./components/UsersComponent";

class App extends Component {

    usersWithAddress = [
        {
            id: 1,
            name: 'vasya',
            age: 31,
            status: false,
            address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
        },
        {
            id: 2,
            name: 'petya',
            age: 30,
            status: true,
            address: { city: 'Kyiv', street: 'Shevchenko', number: 1 },
        },
        {
            id: 3,
            name: 'kolya',
            age: 29,
            status: true,
            address: { city: 'Lviv', street: 'Shevchenko', number: 121 },
        },
        {
            id: 4,
            name: 'olya',
            age: 28,
            status: false,
            address: { city: 'Ternopil', street: 'Shevchenko', number: 90 },
        },
        {
            id: 5,
            name: 'max',
            age: 30,
            status: true,
            address: { city: 'Lviv', street: 'Shevchenko', number: 115 },
        },
        {
            id: 6,
            name: 'anya',
            age: 31,
            status: false,
            address: { city: 'Kyiv', street: 'Shevchenko', number: 2 },
        },
        {
            id: 7,
            name: 'oleg',
            age: 28,
            status: false,
            address: { city: 'Ternopil', street: 'Shevchenko', number: 22 },
        },
        {
            id: 8,
            name: 'andrey',
            age: 29,
            status: true,
            address: { city: 'Lviv', street: 'Shevchenko', number: 43 },
        },
        {
            id: 9,
            name: 'masha',
            age: 30,
            status: true,
            address: { city: 'Kyiv', street: 'Shevchenko', number: 12 },
        },
        {
            id: 10,
            name: 'olya',
            age: 31,
            status: false,
            address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
        },
        {
            id: 11,
            name: 'max',
            age: 31,
            status: true,
            address: { city: 'Ternopil', street: 'Shevchenko', number: 121 },
        },
    ];

    render() {
        const alignCenter = {
            textAlign : "center"
        }
        return (
            <div style={alignCenter}>
                <UsersComponent/>
                {
                    this.usersWithAddress.map(user => (<h6>{user.name} - {user.age} -
                        {user.status.toString()} - {user.address.city} - {user.address.street}-{user.address.number}</h6>))
                }
            </div>
        );
    }
}

export default App;