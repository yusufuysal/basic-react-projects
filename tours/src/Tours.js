import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <div>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
