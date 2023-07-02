import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function HomePage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const imgheight = isSmallScreen ? "auto" : "70vh";
  const btn = isSmallScreen ? "auto" : "10vh";
  const content = isSmallScreen ? "auto" : "25vh";
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
            padding: "10px",
            zIndex:1,
            paddingTop: content,
            paddingLeft:content,
            
          }}
        >
          <Typography variant="h4" data-aos="fade-up"
            data-aos-duration="3000" >
            Transforming Ideas into Digital Masterpieces
            Unleash Your Online Potential with our Exceptional Web Development
            Services
          </Typography>
          <Typography   sx={{ padding: "10px" }}>
            <p> Unleash Your Online Potential with our Exceptional Web Development
              Services</p>
          </Typography>
        </Container>
        <Box sx={{ textAlign: "center", paddingTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              marginBottom: "10px",
              borderRadius: "20px",
              boxShadow: "1px 1px 1px lightblue",
              marginTop:btn
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
