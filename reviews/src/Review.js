import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [peopleId, setPeopleId] = useState(1);

  const checkNumber = (number) => {
    if(number > people.length) {
      return 1
    } 
    if(number < 1) {
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


  return (
    <div className="review">
      <div className="img-container">
        <img
          className="person-img"
          src={people[`${peopleId - 1}`].image}
          alt=""
        />
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{people[`${peopleId - 1}`].name}</h4>
      <p className="job">{people[`${peopleId - 1}`].job}</p>
      <p className="info">{people[`${peopleId - 1}`].text}</p>
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
      <button className="random-btn">Surprise me</button>
    </div>
  );
};

export default Review;
