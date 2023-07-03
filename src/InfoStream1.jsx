import { Container, Card,Box, Divider, Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ScrollUnderline from "./ScrollUnderline";



function SampleNextArrow(props) {

  // const matches = useMediaQuery("(min-width: 600px)");
  

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

  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const ld = isSmallScreen ? 1 : 3;
  
  const settings = {
    className: "center",
    infinite: true,
    speed: 1000,
    slidesToShow: ld,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
    {
      id: 4,
      img: "https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "News 4",
      discription:
        "A few months back the Reserve Bank of India had asked NBFCs about their exposure to the edtech sector, fearing that trouble may be brewing in the space.",
    },
  ];

  return (
    <Box sx={{ marginBottom: "30px", padding: "30px" }} data-aos="fade-left" data-aos-duration="2000">
      <ScrollUnderline>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            fontStyle: "italic",
          }}
        >
          <b>InfoStream</b>
        </Typography>
      </ScrollUnderline>
      <Slider {...settings} style={{ padding: "10px" }}>
        {info.map((item) => {
          return (
            <Container>
              <Card key={item.id} sx={{ borderRadius: "20px", boxShadow: 3 }}>
                <Box
                  component="img"
                  src={item.img}
                  alt="Failed"
                  sx={{ width: "100%", height: "30vh" }}
                />
                <Container sx={{ marginTop: "10px" }}>
                  <Typography
                    variant="h5"
                    sx={{ marginBottom: "10px", color: "navy" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography paragraph>{item.discription}</Typography>
                  <Button
                    className="btn"
                    variant="text"
                    sx={{ float: "right", marginBottom: "10px" }}
                  >
                    View More
                  </Button>
                </Container>
              </Card>
            </Container>
          );
        })}
      </Slider>
    </Box>
  );
}

export default InfoStream1;