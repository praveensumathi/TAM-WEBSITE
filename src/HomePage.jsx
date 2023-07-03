import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

function HomePage() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const imgheight = isSmallScreen ? "100%" :"100%";
  const content = isSmallScreen ? "4%" : "15%";
  return (
    <Box sx={{ marginBottom: "15px"}}>
      <Box
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=600")',
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "darken",
          height:imgheight
        }}
      >
        <Container
          style={{
            color: "white",
            padding: content,
            zIndex:50,
          }}
        >
          <Typography variant="h4"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" >
            Transforming Ideas into Digital Masterpieces
           
          </Typography>
          <Typography   sx={{ padding: "10px" }}>
            <p> Unleash Your Online Potential with our Exceptional Web Development
              Services</p>
          </Typography>
        </Container>
        <Box sx={{ textAlign: "center"}}>
          <Button
            variant="contained"
            className="btn"
            sx={{
              marginBottom: "10px",
              borderRadius: "20px",
              boxShadow: "1px 1px 1px lightblue",
              // marginTop:btn
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
