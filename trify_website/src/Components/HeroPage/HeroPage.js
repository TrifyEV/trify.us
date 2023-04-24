import {Grid, Box, Container, Typography } from "@mui/material";
import React from "react";
import mainBackground from "../../Images/main1.jpg";

function HeroPage() {
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
       
        {/* <Typography
          variant="h4"
          component="div"
          color="#000"
          sx={{
            // marginTop: "-30%",
            // marginLeft: "10%",
          }}
        >
          We are a company that will enable transportation <br />
          electrification in emerging markets.
        </Typography> */}
        <Box sx={{
          border: 2,
          width: "30vw"
        }}>
        <img src={`${mainBackground}`} width="100%" alt="mainImage" />
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
          <Typography variant="h4" component="div" color="#000" align="left">
          Electrifying Mobility, Empowering Lives
          </Typography>
          </Grid>
          
          <Grid xs={10}sx={{
            width: "70%",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}>
          <Typography variant="h6" component="div" color="#000" align="left">
          Trify's goal is to enable accelerated electrification of transportation in emerging markets. We aim to accelerate electric vehicle (EV) transition by providing comprehensive end-to-end solutions for end users.
          </Typography>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HeroPage;
