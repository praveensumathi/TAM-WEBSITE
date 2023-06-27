import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';

export default function Portfolio() {

    const image2 = [
        {
            id: 1,
            img: "https://picsum.photos/300/200",
            title: "project-1",
            description:
                "Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites. Unlike front-end developers, who control everything you can see on a website",
            star: 4,
        },
        {
            id: 2,
            img: "https://picsum.photos/300/200",
            title: "project-2",
            description:
                "Frontend as a Service is a composable commerce solution that allows developers to use cloud-based modules to develop a fully performant eCommerce frontend",
            star: 3,
        },
        
    ];


    return (
        <Container>
            <Typography><h2> Project</h2></Typography>
            {image2.map((item) => {
                return <Card key={item.id} sx={{ maxWidth: 345 }}>
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
                                {/* <Rating sx={{ float: "right" }} name="size-medium" defaultValue={item.star} /> */}
                            </Typography>

                            <Rating name="size-medium" defaultValue={item.star} />
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <Box>
                        <Button
                            size="small" color="primary"
                            sx={{ marginBottom: "10px", float: "right", textTransform: "none" }}
                        >
                            learn More
                        </Button>
                    </Box>

                </Card>
            })}
            <Box sx={{ textAlign: "center", paddingTop: "20px" }}>
                <Button >view More</Button>
            </Box>
        </Container>
    );
}