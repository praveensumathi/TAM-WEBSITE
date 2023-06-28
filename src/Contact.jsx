
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import cimg from './image/contactimg.png';


const Contact = () => {
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
        backgroundImage: `url(${cimg})` ,
        backgroundSize: 'cover',
        justifyContent: 'center',
        padding: '10px',
        paddingLeft:'20px',
    };

    return (
      <div className="img" style={backgroundStyle}>
        <Typography variant="h5">Contact Us</Typography>
        <div>
          
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              sx={{ boxShadow: "1px 1px 10px black" }}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              sx={{ boxShadow: "1px 1px 10px black" }}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Country"
              variant="outlined"
              value={country}
              sx={{ boxShadow: "1px 1px 10px black" }}
              onChange={(e) => setCountry(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              sx={{ boxShadow: "1px 1px 10px black" }}
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
                fullWidth
                sx={{ textTransform: "none" }}
              >
                Contact Us
              </Button>
            </div>
         
        </div>
      </div>
    );
};

export default Contact;
