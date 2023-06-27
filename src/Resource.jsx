import { Button, Box, Container, Typography, Card } from "@mui/material";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function App() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIosIcon
        className={className}
        style={{ ...style, display: "block", color: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIosNewIcon
        className={className}
        style={{ ...style, display: "block", color: "black" }}
        onClick={onClick}
      />
    );
  }
  const imageURL = [
    {
      id: 1,
      img: "https://picsum.photos/300/200",
      title: "Backend",
      description:
        "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/200",
      title: "Frontend",
      description:
        "Frontend as a Service is a composable commerce solution that allows developers to use cloud-based modules to develop a fully performant eCommerce frontend",
    },
  ];

  return (
    <Container>
      <Typography sx={{ padding: "20px" }}>
        <b>Resources</b>
      </Typography>
      <Slider {...settings}>
        {imageURL.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{
                width: "80%",
                height: "50vh",
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "16px",
              }}
            >
              <Typography variant="h5" sx={{ mt: 2, padding: "4px" }}>
                {item.title}
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontSize: 20,
                  textAlign: "center",
                  padding: "60px",
                  zIndex: 2,
                }}
              >
                {item.description}
                <Box justify="flex-end">
                  <Button variant="text">Learn More</Button>
                </Box>
              </Typography>
            </Card>
          );
        })}
      </Slider>
    </Container>
  );
}


