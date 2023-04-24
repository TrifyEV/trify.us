import React from 'react'
import { Grid, Container, Typography } from "@mui/material";
import background4 from "../../Images/background4.jpg"


function SixthFold() {
  return (
    <>
      <Container
        maxWidth="100%"
        sx={{
          // backgroundImage: `url(${mainBackground})`,
          backgroundImage: `url(${background4})`,
          display: "flex",
          //justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          //  backgroundSize: "cover",
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
          Impact
          </Typography>
          </Grid>
          <Grid xs={8}sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}>
          <Typography variant="h6" component="div" color="#000" align="left">
          Trify's integrated approach delivers infrastructure returns, reduces CO<sub>2</sub> emissions, and also increases  gig workers' income.
          </Typography>
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Container>
    </>
  )
}

export default SixthFold
