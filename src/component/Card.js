import React from "react";
import { Box, Card, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Cards({ car }) {
  return (
    <>
      <Box>
          <Grid>
            <Card>
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
          </Link>
          </Card>
          </Grid>
        
      </Box>
    </>
  );
}

export default Cards;
