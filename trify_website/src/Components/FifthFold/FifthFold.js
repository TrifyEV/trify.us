import React from 'react'
import {Box, Grid, Container, Typography } from "@mui/material";
import img5 from "../../Images/Battery.jpg"


function FifthFold() {
  return (
    <>
      <Container
        maxWidth="100%"
        sx={{
          
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#c4fcd5",
        }}
      >
        {/* <img src={`${mainBackground}`} width="100%" /> */}
        <Box sx={{
          border: 2,
          width: "30vw",
          marginRight: "10%"
        }}>
        <img src={`${img5}`} width="100%" alt="mainImage" />
        </Box>

        <Grid container spacing={2}
         sx={{
            width: "40%",
            display: "flex",
            justifyContent: "left",
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
          <Typography variant="h4" component="div" color="#000">
          Roadmap
          </Typography>
          </Grid>
          <Grid xs={4}></Grid>
          <Grid xs={8}sx={{
            width: "70%",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}>
          <Typography variant="h6" component="div" color="#000" align="left">
          Our strategic expansion plan includes scalable growth and profitability, starting with 2 and 3 wheelers in East African markets.
          </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default FifthFold
