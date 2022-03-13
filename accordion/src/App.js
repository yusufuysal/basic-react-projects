import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {data.map((item) => {
            return <SingleQuestion key={item.id} {...item} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
