import { Container, Card,Box, Divider, Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosRoundedIcon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#91cbfa",
        // backgroundColor: "ButtonShadow",
        // borderRadius: "50%",
        fontSize: "40px",
        // width: "40px",
        // height: "40px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosRoundedIcon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#91cbfa",
        fontSize: "40px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function InfoStream1() {
  const settings = {
    // fade:true,
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  

  const info = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "News 1",
      discription:
        "A few months back the Reserve Bank of India had asked NBFCs about their exposure to the edtech sector, fearing that trouble may be brewing in the space.",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "News 2",
      discription:
        "A few months back the Reserve Bank of India had asked NBFCs about their exposure to the edtech sector, fearing that trouble may be brewing in the space.",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "News 3",
      discription:
        "A few months back the Reserve Bank of India had asked NBFCs about their exposure to the edtech sector, fearing that trouble may be brewing in the space.",
    },
  ];

  return (
    
    <Container sx={{marginBottom:"15px"}}>
      <Typography variant="h5">
        <b>InfoStream</b>
      </Typography>
      <Slider {...settings} style={{ padding: "10px" }}>

        {info.map((item) => {
          return (
            <Container>
              <Card key={item.id} sx={{ borderRadius:"20px",boxShadow:3 }}>
                  <Box
                    component="img"
                    src={item.img}
                    alt="Failed"
                    sx={{ width: "100%", height: "30vh" }}
                  />
                <Container sx={{ marginTop: "10px" }}>
                  <Typography variant="h5" sx={{ marginBottom: "10px" ,color:"navy"}}>
                    {item.title}
                  </Typography>
                  <Typography paragraph>{item.discription}</Typography>
                <Button variant="text" sx={{float:"right",marginBottom:"10px"}} >View More</Button>
                </Container>
              </Card>
            </Container>
          );
        })}

      </Slider>
    </Container>
  );
}

export default InfoStream1;