
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import cimg from './image/contactimg.png';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";


const Contact = () => {
   const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const conheight = isSmallScreen ? "auto" : "100%";
  const field = isSmallScreen ? "auto" : "50px";
  const fieldrl = isSmallScreen ? "auto" : "200px";
  const btn = isSmallScreen ? "auto" : "5%";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('Country:', country);
    };

    const backgroundStyle = {
      backgroundImage: `url(${cimg})`,
      backgroundSize: "cover",
      justifyContent: "center",
      padding: "20px",
      height: conheight,
      backgroundColor: "rgba(0,0,0,0.2)",
      backgroundBlendMode: "darken",
    };

    return (
      <div className="img" style={backgroundStyle}>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            fontStyle: "italic",
            color:'white'
          }}
        >
          Contact Us
        </Typography>
        <div
          style={{
            padding: field,
            paddingRight: fieldrl,
            paddingLeft: fieldrl,
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            sx={{
              boxShadow: "1px 1px 1px black",
              backgroundColor: "rgba(252, 252, 252,0.5)",
              backgroundBlendMode: "color",
            }}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            sx={{
              boxShadow: "1px 1px 1px black",
              backgroundColor: "rgba(252, 252, 252,0.5)",
              backgroundBlendMode: "color",
            }}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Country"
            variant="outlined"
            value={country}
            sx={{
              boxShadow: "1px 1px 1px black",
              backgroundColor: "rgba(252, 252, 252,0.5)",
              backgroundBlendMode: "color",
            }}
            onChange={(e) => setCountry(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            variant="outlined"
            sx={{
              boxShadow: "1px 1px 1px black",
              backgroundColor: "rgba(252, 252, 252,0.5)",
              backgroundBlendMode: "color",
            }}
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            margin="normal"
          />
          <div style={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              // fullWidth
              onClick={handleSubmit}
              sx={{ textTransform: "none", marginTop: btn }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    );
};

export default Contact;
