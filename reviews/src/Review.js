import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [peopleId, setPeopleId] = useState(0);

  const checkNumber = (number) => {
    if(number > people.length - 1) {
      return 0
    } 
    if(number < 0) {
      return people.length - 1
    } 
    return number
  }

  const prevReview = (id) => {
    const left = checkNumber(id - 1)
    setPeopleId(left)
  };

  const nextReview = (id) => {
     const right = checkNumber(id + 1)
     setPeopleId(right)
  };

  const randomPeople = () => {
    let randomIndex = Math.floor(Math.random() * people.length)
    if(randomIndex === peopleId) {
      randomIndex = peopleId - 1
    }
    setPeopleId(checkNumber(randomIndex))
  }

  return (
    <div className="review">
      <div className="img-container">
        <img
          className="person-img"
          src={people[`${peopleId}`].image}
          alt=""
        />
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{people[`${peopleId}`].name}</h4>
      <p className="job">{people[`${peopleId}`].job}</p>
      <p className="info">{people[`${peopleId}`].text}</p>
      <div>
        <button
          className="prev-btn"
          onClick={() => {
            prevReview(peopleId);
          }}
        >
          <FaChevronLeft/>
        </button>
        <button
          className="next-btn"
          onClick={() => {
            nextReview(peopleId);
          }}
        >
          <FaChevronRight/>
        </button>
      </div>
      <button className="random-btn" onClick = {randomPeople}>Surprise me</button>
    </div>
  );
};

export default Review;
