import React from 'react'
import { Grid, Container, Typography } from "@mui/material";
import background2 from "../../Images/Background2.jpg"

function FourthFold() {
  return (
    <>
      <Container
        maxWidth="100%"
        sx={{
          backgroundImage: `url(${background2})`,
          display: "flex",
         // justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundColor: "#fff",
        }}
      >
        {/* <img src={`${mainBackground}`} width="100%" /> */}
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
          <Typography variant="h4" component="div" color="#000">
          Trify Model
          </Typography>
          </Grid>
          <Grid xs={8}sx={{
            width: "70%",
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}>
          <Typography variant="h6" component="div" color="#000" align="left">
          We collaborate with OEMs and other existing supply chain participants, to build a comprehensive and ubiquitous EV infrastructure, financing, and maintenance network.  Our motto is to integrate and complement rather than replicate what already exists.
          </Typography>
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Container>
    </>
  )
}

export default FourthFold
