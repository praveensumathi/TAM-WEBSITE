import { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import ClearIcon from "@mui/icons-material/Clear";
import AttractionsIcon from "@mui/icons-material/Attractions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Techonologies from "./Techonologies";
import Home from "./Homeimage";
import InfoStream1 from "./InfoStream1";
import Resource from "./Resource";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import About from "./About";
import Portfolio from "./Portfolio";
import { Divider } from "@mui/material";
import Logo2 from './image/Logo2.png';
import Logo1 from './image/Logo1.png';
import HomePage from "./HomePage";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./tam.css";
// import {theme} from './Theme'

const drawerWidth = 240;
const navItems = [
  { label: " Home", link: "/",   },
  {
    label: "InfoStream",
    link: "/infostream",

  },
  {
    label: "Technologies",
    link: "/tecnologies",

  },
  { label: "Resource", link: "/resource"  },
  { label: "Portfolio", link: "/portfolio"  },
  { label: "Testimonial", link: "/testimonial"  },
  { label: "Contact Us", link: "/contact us" },
  { label: "About Us", link: "/about" },
];

const Main = styled("main")(({ theme, open }) => ({
  flexGrow: 1,
  transition: theme.transitions.create("padding", {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  paddingLeft: open ? drawerWidth : 0,
}));

const DrawerHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
});

const Title = styled(Typography)({
  flexGrow: 1,
  padding: "10px",
});
const Container = styled("div")({
  width: "100%",
  height: "100%",
});
export default function Drawers() {
   const theme = useTheme();
  const isSmallScreen = useMediaQuery("(min-width:950px)");
  const mlist = isSmallScreen ? "block" : "none";
  const micon = isSmallScreen ? "none" : "block";
  
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  const handleLeftDrawerOpen = () => {
    setRightDrawerOpen(true);
  };

  const handleRightDrawerClose = () => {
    setRightDrawerOpen(false);
  };

  return (
    <Container className="scrollbar">
      <AppBar position="static">
        <Toolbar>
          <Title
            // variant="h6"
            component="div"
            paddingTop="10px"
            color="#26c20cf5"
            display="flex"
            // backgroundcolor="red"
            alignItems={"center"}
            // justifyContent={"center"}
            // gap={1}
          >
            <Box
              component="img"
              src={Logo1}
              sx={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                backgroundColor: "black",
              }}
            />
            <Typography
              variant="h4"
              sx={{ fontFamily: "cursive", color: "#d1fa05" }}
            >
              TamTree
            </Typography>
          </Title>
          <Box sx={{ display: mlist }}>
            {navItems.map((item) => (
              <List
                variant="h6"
                className="button"
                key={item.label}
                sx={{ color: "#ffff", marginLeft: "20px", marginRight: "10px" }}
              >
                <ListItemText>{item.label}</ListItemText>
              </List>
            ))}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleLeftDrawerOpen}
            sx={{ mr: 2, display: micon }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Main>
        {/* <Home /> */}
        <HomePage />
        <InfoStream1 />
        <Techonologies />
        <Resource />
        <Portfolio />
        <Divider sx={{ margin: "10px" }} />
        <Testimonial />
        <Contact />
        <About />
      </Main>

      <Drawer
        variant="persistent"
        anchor="right"
        open={rightDrawerOpen}
        sx={{
          width: 300,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 300,
          },
        }}
      >
        <DrawerHeader sx={{ backgroundColor: "#a6110a" }}>
          <Typography
            variant="h6"
            component="div"
            color="secondary"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src={Logo1}
              sx={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                backgroundColor: "#fceed2",
              }}
            />
            Tam Tree
          </Typography>
          <IconButton onClick={handleRightDrawerClose} color="secondary">
            <ClearIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} onClick={handleRightDrawerClose}>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}
