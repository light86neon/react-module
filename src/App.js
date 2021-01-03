import React, {useState, useEffect, useReducer } from 'react';
import './App.css'

const reducer= (state, action) => {
    switch(action.type){
        case "SET_TODO": {
            return action.payload;
        }
        case "CHANGE_TODO_STATUS": {
            return {
                ...state,
                completed: !state.completed
            };
        }
        case "CHANGE_TODO_TITLE":{
            return {
                ...state,
                title: action.payload
            };
        }
        default: {
            console.error("didn't found case", action);
            return state;
        }
    }
};

const initialState = {
    userId: null,
    id: null,
    title: "",
    completed: false
};



export default function App () {
    const [state, dispatch] = useReducer(reducer, initialState);
const [counter, setCounter] = useState(1);

useEffect(() => {
    console.log('I was called')
    fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
        .then((response)=>response.json())
        .then((json)=>{
            dispatch({ type: "SET_TODO", payload: json });
        });
}, [counter]);



    const onClickHandler = () =>
        setCounter((prevState) => prevState + 1);


    const onStatusChange =()=>
        dispatch({ type: "CHANGE_TODO_STATUS"});


    const onTitleChange =() =>
        dispatch({ type: "CHANGE_TODO_TITLE", payload: Math.random()});

    return (
        <>

            <button onClick={onClickHandler}>Inc</button>
            <button onClick={onStatusChange}>change todo status</button>
            <button onClick={onTitleChange}>change todo title</button>

            <h1>Counter {counter}</h1>
            {
                !!state && (
                    <>
                    <h2>{state.id}</h2>
                    <h2>{state.title}</h2>
                    <h2>{state.completed.toString()}</h2>
                    </>
                )
            }
        </>
    )

    ;
}