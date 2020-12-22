import React, { memo, useEffect, useMemo, useReducer, useState } from "react";
import "./style.css";

export default function App({initialCounter}){
 const [counter,setCounter] = useState(0);

 const onClickHandler = () => {
setCounter( counter +1);
 }
 const onDecClickHandler = () => {
 setCounter( counter - 1)
 }
 const onClickResetHandler = () => {
setCounter(initialCounter = 0)
 }

    return(
        <div>
            <button onClick={onClickHandler}>Додати</button>
            <button onClick={onClickResetHandler}>reset</button>
            <button onClick={onDecClickHandler}>Відняти </button>
            <h1>Helo sandbox {counter}</h1>
            <h2>Start aditing to see some magic</h2>
        </div>
    )
}