import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  // const [category, setCategory] = useState([])

  let uniqueCategories = new Set();
  uniqueCategories.add("all");
  items.forEach((item) => {
    uniqueCategories.add(item.category);
  });
  const uniqueCategoriesArray = Array.from(uniqueCategories);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {/*   find the number of distinct categories in the data array and make a new set of those categories     */}
          {/*   map through the categories array and render the Categories component for each category     */}
          {uniqueCategoriesArray.map((category) => {
            return <Categories category={category} />;
          })}
          {}
        </div>
      </section>
    </main>
  );
}

export default App;
