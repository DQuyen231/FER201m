import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Card";


function Car() {

  const [state, setState] = useState(null);
  console.log(state);
  useEffect(() => {
    const getAccountInfo = () => {
      axios({
        method: "GET",
        url: "https://6406e046862956433e5c53f4.mockapi.io/car",
      })
        .then((res) => {
          setState(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{marginTop:"100px"}}>
       <h2>Lux</h2>
      <div className="containerHome">
        {state && state.filter((a) => a.Type === "Luxury").slice(0,3).map((car, index) => <Cards car={car} key={index} />)}
      </div>
      <h2>Standard</h2>
      <div className="containerHome">
        {state && state.filter((a) => a.Type === "Standard").slice(0,3).map((car, index) => <Cards car={car} key={index} />)}
      </div>
      <h2>Economy</h2>
      <div className="containerHome">
        {state && state.filter((a) => a.Type === "Economy").slice(0,3).map((car, index) => <Cards car={car} key={index} />)}
      </div>
    </div>
  );
}

export default Car;