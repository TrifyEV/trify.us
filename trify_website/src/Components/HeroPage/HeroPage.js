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
          marginRight: "10%",
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
            marginRight: "5%",
            //marginLeft: "5%"
          }}>
          <Grid xs={12}sx={{
            width: "70%",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            paddingBottom: "5%",
          }}>
          <Typography variant="h2" component="div" color="#000" align="right">
          Electrifying Mobility, Empowering Lives
          </Typography>
          </Grid>
          <Grid xs={4}></Grid>
          <Grid xs={8}sx={{
            width: "70%",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}>
          <Typography variant="h5" component="div" color="#000" align="justify">
          Trify's goal is to enable accelerated electrification of transportation in emerging markets. We aim to accelerate electric vehicle (EV) transition by providing comprehensive end-to-end solutions for end users.
          </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HeroPage;
