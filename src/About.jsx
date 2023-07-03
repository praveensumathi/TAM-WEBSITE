import { Box, Container, CssBaseline, Divider, Typography,Link } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


function About() {
  return (
    <div sx={{ paddingRight: "0", paddingLeft: "0" }}>
      <div
        style={{
          backgroundColor: "#3d474f",
          color: "white",
          padding: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Address:</Typography>
          <Divider
            sx={{
              backgroundColor: "white",
              width: "200px",
              margin: "5px 1px",
            }}
          />
          <Typography>
            TamTree Technologies,
            <br />
            Keelsathambur,
            <br />
            Namakkal-637207,
            <br />
            Tamil Nadu.
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Call Us:
          </Typography>
          <Divider
            sx={{
              backgroundColor: "white",
              width: "200px",
              margin: "5px 1px",
            }}
          />
          <Typography>1234567890</Typography>

          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Mail Us:
          </Typography>
          <Divider
            sx={{
              backgroundColor: "white",
              width: "200px",
              margin: "5px 1px",
            }}
          />
          <Typography>@tamtree.in</Typography>
        </Box>
        <Container>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              textDecoration: "underline",
            }}
          >
            Connect with Us
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <FacebookIcon sx={{ marginBottom: "10px" }} />
            <TwitterIcon />
            <YouTubeIcon />
            <Link
              href="https://instagram.com/jeevanand0508?igshid=ZDc4ODBmNjlmNQ=="
              sx={{ color: "white" }}
            >
              <InstagramIcon />
            </Link>
            <LinkedInIcon />
          </Box>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#1b1e21",
          color: "white",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ textDecoration: "underline" }}>
          © 2023 TamTree.inc
        </Typography>
        <Box sx={{ display: "flex", gap: "40px", padding: "5px" }}>
          <Typography>Disclaimer</Typography>
          <Divider sx={{ backgroundColor: "white", padding: "1px" }} />
          <Typography>Privacy</Typography>
        </Box>
      </div>
    </div>
  );
}

export default About;
