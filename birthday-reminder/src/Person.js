import React from "react";
import "./index.css"

const Person = (props) => {
    return (
        <div className="person">
            <img className = "image" src={props.img} alt="" />
            <div>
                <h4>{props.name}</h4>
                <p>{props.age} years</p>
            </div>
        </div>
    )
}

export default Person