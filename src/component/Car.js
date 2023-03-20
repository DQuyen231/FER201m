import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Card";
function Car() {
  const [state, setState] = useState(null);
  useEffect(() => {
    const getAccountInfo = async () => {
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
       <h2>Xe Ít Tiền</h2>
      <div className="containerHome">
        {state && state.sort((a, b) => a.price - b.price).slice(0,3).map((car, index) => <Cards car={car} key={index} />)}
      </div>
      <h2>Xe Nhiều Tiền</h2>
      <div className="containerHome">
        {state && state.sort((a, b) => b.price - a.price).slice(0,3).map((car, index) => <Cards car={car} key={index} />)}
      </div>
      <h2>Xe Vừa Tiền</h2>
      <div className="containerHome">
        {state && state.slice(0,3).map((car, index) => <Cards car={car} key={index} />)}
      </div>
    </div>
  );
}

export default Car;
