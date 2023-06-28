import { Container, padding } from '@mui/system'
import React from 'react'
import imghtml from './image/imghtml.png'
import imgcss from './image/imgcss.png'
import imgjs from './image/imgjs.png'
import imgnode from './image/imgnode.jpg'
import imgreact from './image/imgreact.png'
import cimg from './image/contactimg.png'
import Marquee from "react-fast-marquee";
import { Typography ,Box} from '@mui/material'



function Techonologies() {
    return (
      <Box sx={{marginBottom:"15px",padding:"15px"}}>
        <Typography variant="h5" sx={{marginBottom:"5px"}}>
          <b>Techonologies</b>
        </Typography>
        <Box sx={{paddingRight:"15px",paddingLeft:"15px"}}>
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