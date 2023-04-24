import React from "react";
import backgroundImg from "../../Images/Wall2.jpg";
import { Grid, Container, Typography } from "@mui/material";

function SecondFold() {
  return (
    <>
      <Container
        maxWidth="100%"
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          display: "flex",
          //justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundColor: "#fff",
        }}
      >
        {/* <img src={`${backgroundImg}`} width="100%" /> */}
        <Grid container spacing={2}
         sx={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5%"
          }}>
          <Grid xs={12}sx={{
            width: "70%",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            paddingBottom: "5%",
          }}>
          <Typography variant="h2" component="div" color="#000">
            Our Vision
          </Typography>
          </Grid>
          <Grid xs={8}sx={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography variant="h4" component="div" color="#000" align="justify">
          Creating a sustainable future by empowering gig workers with affordable, efficient, and eco-friendly EV solutions.
          </Typography>
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SecondFold;
