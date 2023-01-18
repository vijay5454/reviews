import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const person = people[index];
  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    console.log("prevbtn");
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <section className="container">
      <div className="title">
        <h1>Reviews</h1>
        <div className="underline"></div>
      </div>
      <article className="review">
        <div className="img-container">
          <img
            className="person-img"
            src={person.image}
            alt={person.name}
          ></img>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h3 className="author">{person.name}</h3>
        <p className="job">{person.job}</p>
        <p className="info">{person.text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn">Suprise me!</button>
      </article>
    </section>
  );
};

export default Reviews;
