import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return <main>
      <Loading />
    </main>;
  } 
  if(tours.length === 0) {
    return <main>
      <div className= "title">
        <h2>no tour left</h2>
        <button className="btn" onClick={getTours}>
          refresh
        </button>  
      </div>
    </main>
  }
    return <main>
      <Tours tours={tours} removeTour = {removeTour}/>
    </main>;
  }

export default App;
