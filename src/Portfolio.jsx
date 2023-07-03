import React, { useState, useEffect ,useRef} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useMediaQuery } from "@mui/material";
import "./tam.css";
import ScrollUnderline from "./ScrollUnderline";

export default function Portfolio() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(min-width: 651px) and (max-width: 960px)");
  // const [isTitleVisible, setIsTitleVisible] = useState(false);
  // const titleRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (titleRef.current) {
  //       const { top } = titleRef.current.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;
  //       const titleOffset = 50;
  //       const isTitleVisible = top <= windowHeight / 1.1 - titleOffset;
  //       setIsTitleVisible(isTitleVisible);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  
  const image2 = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "project-1",
      description:
        "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website",
      star: 4,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "project-2",
      description:
        "Frontend as a Service is a composable commerce solution that allows developers to use cloud-based modules to develop a fully performant eCommerce frontend",
      star: 5,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "project-3",
      description:
        "Testing in the context of software development refers to the process of verifying and validating a system or component to ensure that it meets the specified requirements. It involves executing the system or component with test cases to uncover any defects or errors.",
      star: 4,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "project-4",
      description:
        "Unique design refers to the creation of visually distinct and innovative designs that stand out from conventional or standard designs. It involves exploring creative and original approaches to visual elements, layout, color schemes, typography, and interactive elements.",
      star: 5,
    },
  ];

  return (
    <Box sx={{ marginBottom: "15px", padding: "30px" }} data-aos="fade-left" data-aos-duration="2000">
      <ScrollUnderline>
        <Typography
          variant="h5"
          // className={isTitleVisible ? "underline" : ""}
          // ref={titleRef}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            fontStyle: "italic",
          }}
        >
          <b>Portfolio</b>
        </Typography>
      </ScrollUnderline>
      <Box
        className={isSmallScreen ? "portfolioBoxM" : "portfolioBoxL"}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          flexWrap: "wrap",
          gap: 4,
          padding: "10px",
        }}
      >
        {image2.map((item, index) => (
          <Card
            key={item.id}
            sx={{
              marginBottom: "10px",
              width: isSmallScreen
                ? "100%"
                : isMediumScreen
                ? "calc(50% - 20px)"
                : "calc(30% - 20px)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Rating name="read-only" defaultValue={item.star} readOnly />
                <Typography variant="body2" color="secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className="btn"
                size="small"
                color="primary"
                sx={{
                  marginBottom: "10px",
                  ml: "auto",
                  textTransform: "none",
                }}
              >
                learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          textAlign: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <Button
          className="btn"
          variant="outlined"
          sx={{ borderRadius: "50px", boxShadow: "1px 1px 10px lightblue" }}
        >
          view More
        </Button>
      </Box>
    </Box>
  );
}
