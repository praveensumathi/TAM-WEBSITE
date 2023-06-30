import { padding } from '@mui/system'
import React from 'react'
import imghtml from './image/imghtml.png'
import imgcss from './image/imgcss.png'
import imgjs from './image/imgjs.png'
import imgnode from './image/imgnode.jpg'
import imgreact from './image/imgreact.png'
import cimg from './image/contactimg.png'
import Marquee from "react-fast-marquee";



function Techonologies() {
  return (
      <div style={{ paddingTop: "10px" }}> <h2>Techonologies:</h2> 
          <Marquee>
              <img src={imghtml} alt='Htmlimg' height={100} style={{paddingRight:"50px"}} />
              <img src={imgcss} alt='Htmlimg' height={100} style={{ paddingRight: "50px" }} />
              <img src={imgjs} alt='Htmlimg' height={100} style={{ paddingRight: "50px" }} />
              <img src={imgnode} alt='Htmlimg' height={100} style={{ paddingRight: "50px" }} />
              <img src={imgreact} alt='Htmlimg' height={100} style={{ paddingRight: "50px" }} />
              <img src={imghtml} alt='Htmlimg' height={100} style={{ paddingRight: "50px" }} />
              <img src={imgcss} alt='Htmlimg' height={100} style={{ paddingRight: "50px" }} />
              <img src={imgjs} alt='Htmlimg' height={100} style={{ paddingRight: "50px" }} />
              <img src={imgnode} alt='Htmlimg' height={100} style={{ paddingRight: "50px" }} />
              <img src={imgreact} alt='Htmlimg' height={100} style={{ paddingRight: "50px" }} />
          </Marquee>
          {/* <img src={imghtml} alt='Htmlimg' /> */}

      </div>
  )
}

export default Techonologies