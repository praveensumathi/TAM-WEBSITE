import {
  Button,
  Box,
  Container,
  Typography,
  Card,
  Divider,
} from "@mui/material";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { shadows } from "@mui/system";
import { Translate } from "@mui/icons-material";
import { useMediaQuery } from '@mui/material';
import ScrollUnderline from "./ScrollUnderline";



export default function Resource() {
  const isSmallScreen = useMediaQuery('(max-width: 650px)');
  const isMediumScreen = useMediaQuery('(min-width: 651px) and (max-width: 960px)');
  const isLargeScreen = useMediaQuery('(min-width: 961px)');



  const settings = {
    // fade: true,
    infinite: true,
    speed: 700,
    slidesToShow: isSmallScreen ? 1 : isMediumScreen ? 2 : 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIosIcon
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

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIosNewIcon
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



  const imageURL = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/11813187/pexels-photo-11813187.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Frontend",
      description:
        "Frontend as a Service is a composable commerce solution that allows developers to use cloud-based modules to develop a fully performant eCommerce frontend",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/1393858554/photo/relational-database-tables-with-server-room-and-datacenter-background-concept-of-database.jpg?b=1&s=612x612&w=0&k=20&c=wsc-TM8hTxr08jfnns_mWFyJ9vUMHFU19h7B1U7Xepw=",
      title: "Backend",
      description:
        "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/11813187/pexels-photo-11813187.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Testing",
      description:
        "Testing in the context of software development refers to the process of verifying and validating a system or component to ensure that it meets the specified requirements. It involves executing the system or component with test cases to uncover any defects or errors.",
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/1393858554/photo/relational-database-tables-with-server-room-and-datacenter-background-concept-of-database.jpg?b=1&s=612x612&w=0&k=20&c=wsc-TM8hTxr08jfnns_mWFyJ9vUMHFU19h7B1U7Xepw=",
      title: "Unique design",
      description:
        "Unique design refers to the creation of visually distinct and innovative designs that stand out from conventional or standard designs. It involves exploring creative and original approaches to visual elements, layout, color schemes, typography, and interactive elements.",
    },
  ];

  return (
    <Box sx={{ marginBottom: "15px", padding: "30px" }}
      data-aos="fade-left"
      data-aos-duration="2000"
      // data-aos-delay="500"
      // data-aos-easing="ease-in-out"
      // data-aos-mirror="false"
      // data-aos-once="true"
      // data-aos-anchor-placement="top-center"
    >
      <ScrollUnderline>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontStyle: "italic",
          }}
        >
          <b>Resources</b>
        </Typography>
      </ScrollUnderline>
      <Box>
        <Slider
          {...settings}
          // className={isSmallScreen ? "portfolioBoxM" : "portfolioBoxL"}
        >
          {imageURL.map((item) => {
            return (
              <Box
                className={
                  isSmallScreen ? "ResourcesCardBoxM" : "ResourcesCardBoxL"
                }
              >
                <Card
                  key={item.id}
                  sx={{
                    zIndex: 3,
                    backgroundColor: "rgba(242, 244, 245,0.4)",
                    backgroundBlendMode: "color",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "16px",
                  }}
                >
                  <Container
                    sx={{
                      backgroundColor: "rgba(26, 182, 235,0.5)",
                      backgroundBlendMode: "darken",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "cursive",
                        fontSize:"25px",
                        fontWeight: "900",
                        padding: "4px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Container>

                  <Divider
                    sx={{
                      backgroundColor: "rgba(6, 150, 199)",
                      padding: "1px",
                    }}
                  />
                  <Box
                    component="img"
                    src={item.img}
                    alt="Failed"
                    sx={{ width: "100%", height: "20vh" }}
                  />
                  <Typography
                    paragraph
                    sx={{
                      fontSize: 20,
                      textAlign: "center",
                      padding: "10px",
                      fontWeight: "700",
                      height: "300px",
                      overflow: "hidden",
                      // zIndex: 2,
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Box
                    justify="flex-end"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "5px",
                    }}
                  >
                    <Button variant="contained" className="btn">Learn More</Button>
                  </Box>
                </Card>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}
