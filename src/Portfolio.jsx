import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useMediaQuery } from '@mui/material';
import "./tam.css"

export default function Portfolio() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

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
      title: "project-1",
      description:
        "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website",
      star: 4,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "project-2",
      description:
        "Frontend as a Service is a composable commerce solution that allows developers to use cloud-based modules to develop a fully performant eCommerce frontend",
      star: 5,
    },
  ];

  return (
      <Box sx={{ marginBottom: "15px",padding:"15px" }}>
      <Typography variant="h5">
        <b>Portfolio</b>
      </Typography>
      <Box
        className={isSmallScreen ? "portfolioBoxM" : "portfolioBoxL"}

        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          flexWrap: 'wrap',
          gap: 4,
          padding:"10px"
        }}
      >
        {image2.map((item, index) => (
          <Card
            key={item.id}
            sx={{
              marginBottom: "10px",
              width: isSmallScreen ? "100%" : "calc(50% - 20px)",
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
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Rating name="size-medium" defaultValue={item.star} />
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
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
      <Box sx={{ textAlign: "center", justifyContent: "center", paddingTop: "20px" }}>
        <Button variant='outlined' sx={{ borderRadius: "50px", boxShadow: "1px 1px 10px lightblue" }}>view More</Button>
      </Box>
    </Box>
  );
}
