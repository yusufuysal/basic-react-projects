import React, { useState } from 'react';
import Person from './Person';
import data from './data';
import "./index.css"

const List = () => {
  const [list, setList] = useState(data)
  const [title, setTitle] = useState("")
  return (
    <div className='container'>
      <h3>{title}</h3>
      {list.map(person => {
        return <Person className="person" key = {person.id} img = {person.image} name = {person.name} age = {person.age}/>
      })}
      <button onClick = {() => {
        setList([])
        setTitle("0 birthdays today")
      }}>Clear All</button>
    </div>
  );
};

export default List;
