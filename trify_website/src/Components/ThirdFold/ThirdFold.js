import React from "react";
import {Box, Grid, Container, Typography } from "@mui/material";
import img3 from "../../Images/all.jpg"

function ThirdFold() {
  return (
    <>
      <Container
        maxWidth="100%"
        sx={{
          // backgroundImage: `url(${mainBackground})`,
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          minHeight: "100vh",
          //  backgroundSize: "cover",
          backgroundColor: "#c4fcd5",
        }}
      >
        {/* <img src={`${mainBackground}`} width="100%" /> */}
        <Box sx={{
          border: 2,
          width: "30vw",
        }}>
        <img src={`${img3}`} width="100%" alt="mainImage" />
        </Box>
        <Grid container spacing={2}
         sx={{
            width: "40%",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            marginLeft: "15%",
            paddingLeft: "5%"
          }}>
          <Grid xs={12}sx={{
            width: "70%",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            paddingBottom: "5%",
          }}>
          <Typography variant="h4" component="div" color="#000">
          The Opportunity
          </Typography>
          </Grid>
          
          <Grid xs={8}sx={{
            width: "70%",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}>
          <Typography variant="h6" component="div" color="#000" align="left">
          The arbitrage between the cost of electricity and petrol/ oil required to power EVs, creates an opportunity to green the transportation sector in a sustainable and scalable way for all value chain participants.
          </Typography>
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ThirdFold;
