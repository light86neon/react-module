import React, {Component} from 'react';
import "./style.css"

export default function Cars (props) {

    return (
        <>
            <div className={"cars"}>
                <h3>{props.name}</h3>
                <p>Year: <strong>{props.year}</strong></p>
                <small>This is car</small>
            </div>


        </>
    );
}