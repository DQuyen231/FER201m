import React from "react";
import { Col, Card } from "react-materialize";
import { Link } from "react-router-dom";

function Cards({ car }) {
  return (
    <>
      <Card>
        <Col>
          <Link to={`/booking/${car.id}`} className="card">
            <div className="item">
              <div className="avatarImg">
                <img src={car.carImages} alt={car.carImages} />
              </div>
              <div className="advisor" style={{ justifyContent: "flex-end" }}>
                <div className="profile">
                  <Link to="#" className="name">
                    {car.carname}
                  </Link>
                  <div>
                    <span className="info">price: {car.price}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="skills">
                <span className="info">{car.Type}</span>
              </div>
            </div>
          </Link>
        </Col>
      </Card>
    </>
  );
}

export default Cards;
