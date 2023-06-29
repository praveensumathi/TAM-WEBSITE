import React from "react";
import { Container, Card, Box, Button, Divider } from "@mui/material";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Testimonial() {

    const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const card = isSmallScreen ? "auto" : "40vh";
  const settings = {
    //    fade:true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const clinet = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jerry",
      command:
        "Es ist unmöglich oder würde zu lange brauchen, diese Verzauberungen zu bekommen",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "John",
      command:
        "Es ist unmöglich oder würde zu lange brauchen, diese Verzauberungen zu bekommen",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Petter",
      command:
        "Es ist unmöglich oder würde zu lange brauchen, diese Verzauberungen zu bekommen",
    },
  ];
  return (
    <Container sx={{paddingBottom:"50px"}}>
      <Typography
        variant="h5"
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px",fontStyle:"italic"}}
      >
        <b>Testimonial</b>
      </Typography>
      <Slider {...settings} style={{ padding: "10px" }}>
        {clinet.map((item) => {
          return (
            <Container>
              <Card key={item.id} sx={{ borderRadius: "20px", boxShadow: 3,height:card }}>
                <Container sx={{display:"flex",gap:"20px",marginBottom:"20px",marginTop:"10px"}}>
                  <Box
                    component="img"
                    src={item.img}
                    alt="Failed"
                    sx={{ borderRadius: "50%" ,width:"70px",height:"70px"}}
                  />
                    <Typography
                      variant="h6"
                      sx={{ marginBottom: "10px", color: "navy" }}
                    >
                     Name: {item.name}
                    </Typography>
                      </Container>
                      <Divider></Divider>
                  <Container sx={{ marginBottom: "20px" ,marginTop:"20px"}}>
                  <Typography paragraph>{item.command}</Typography>
                </Container>
              </Card>
            </Container>
          );
        })}
      </Slider>
    </Container>
  );
}

export default Testimonial;
