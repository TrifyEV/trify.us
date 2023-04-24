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
          marginRight: "10%"
        }}>
        <img src={`${img3}`} width="100%" alt="mainImage" />
        </Box>
        <Grid container spacing={2}
         sx={{
            width: "40%",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            marginRight: "5%",
            //marginLeft: "auto"
          }}>
          <Grid xs={12}sx={{
            width: "70%",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            paddingBottom: "5%",
          }}>
          <Typography variant="h2" component="div" color="#000">
          The Opportunity
          </Typography>
          </Grid>
          <Grid xs={4}></Grid>
          <Grid xs={8}sx={{
            width: "70%",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}>
          <Typography variant="h4" component="div" color="#000" align="justify">
          The arbitrage between the cost of electricity and petrol/ oil required to power EVs, creates an opportunity to green the transportation sector in a sustainable and scalable way for all value chain participants.
          </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ThirdFold;
