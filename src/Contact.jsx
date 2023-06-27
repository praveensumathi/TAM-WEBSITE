
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
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
        height: '600px',
        justifyContent: 'center',
        padding: '10px',
        paddingLeft:'20px',
    };

    return (

        <div className='img' style={backgroundStyle}>
            <h3>Contact Us</h3>
            <div>
                <TextField
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Country"
                    variant="outlined"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <div style={{ textAlign: 'center' }}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </div>

            </div>
        </div>

    );
};

export default Contact;
