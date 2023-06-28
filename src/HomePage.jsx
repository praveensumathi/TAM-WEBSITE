import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function HomePage() {
  return (
    <Box sx={{ marginBottom: "15px" }}>
      <Box
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=600")',
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "darken",
        }}
      >
        <Container
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            padding: "10px",
            paddingTop: "50px",
          }}
        >
          <Typography variant="h4">
            Transforming Ideas into Digital Masterpieces
          </Typography>
          <Typography variant="h6" sx={{ padding: "10px" }}>
            Unleash Your Online Potential with our Exceptional Web Development
            Services
          </Typography>
        </Container>
        <Box sx={{ textAlign: "center", paddingTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              marginBottom: "10px",
              borderRadius: "20px",
              boxShadow: "1px 1px 1px lightblue",
            }}
          >
            view More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
