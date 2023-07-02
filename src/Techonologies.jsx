import React from 'react'
import imghtml from './image/imghtml.png'
import imgcss from './image/imgcss.png'
import imgjs from './image/imgjs.png'
import imgnode from './image/imgnode.jpg'
import imgreact from './image/imgreact.png'
import Marquee from "react-fast-marquee";
import { Typography, Box } from '@mui/material';
import ScrollUnderline from './ScrollUnderline'



function Techonologies() {
    return (
      <Box sx={{ marginBottom: "15px", padding: "10px" }}>
        <ScrollUnderline>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              fontStyle: "italic",
              margin: "30px",
            }}
          >
            <b>Techonologies</b>
          </Typography>
        </ScrollUnderline>
        <Box sx={{ paddingRight: "5px", paddingLeft: "5px" }}>
          <Marquee>
            <img
              src={imghtml}
              alt="Htmlimg"
              height={100}
              style={{ paddingRight: "50px" }}
            />
            <img
              src={imgcss}
              alt="Htmlimg"
              height={100}
              style={{ paddingRight: "50px" }}
            />
            <img
              src={imgjs}
              alt="Htmlimg"
              height={100}
              style={{ paddingRight: "50px" }}
            />
            <img
              src={imgnode}
              alt="Htmlimg"
              height={100}
              style={{ paddingRight: "50px" }}
            />
            <img
              src={imgreact}
              alt="Htmlimg"
              height={100}
              style={{ paddingRight: "50px" }}
            />
            <img
              src={imghtml}
              alt="Htmlimg"
              height={100}
              style={{ paddingRight: "50px" }}
            />
            <img
              src={imgcss}
              alt="Htmlimg"
              height={100}
              style={{ paddingRight: "50px" }}
            />
            <img
              src={imgjs}
              alt="Htmlimg"
              height={100}
              style={{ paddingRight: "50px" }}
            />
            <img
              src={imgnode}
              alt="Htmlimg"
              height={100}
              style={{ paddingRight: "50px" }}
            />
            <img
              src={imgreact}
              alt="Htmlimg"
              height={100}
              style={{ paddingRight: "50px" }}
            />
          </Marquee>
          {/* <img src={imghtml} alt='Htmlimg' /> */}
        </Box>
      </Box>
    );
}

export default Techonologies