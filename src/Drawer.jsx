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
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
const drawerWidth = 240;
const navItems = [
  { label: " Home", link: "/", icon: <HomeIcon color="primary" /> },
  {
    label: "Profile",
    link: "/profile",
    icon: <AccountCircleIcon color="primary" />,
  },
  {
    label: "Orders",
    link: "/orders",
    icon: <AddShoppingCartIcon color="primary" />,
  },
  { label: "About", link: "/about", icon: <InfoIcon color="primary" /> },
];

const Main = styled("main")(({ theme, open }) => ({
  flexGrow: 1,
  padding: "20px",
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
  width: "100vw",
  height: "100vh",
});
export default function Drawers() {
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  const handleLeftDrawerOpen = () => {
    setRightDrawerOpen(true);
  };

  const handleRightDrawerClose = () => {
    setRightDrawerOpen(false);
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Title
            // variant="h6"
            component="div"
            // paddingTop="10px"
            color="yellowgreen"
            display="flex"
            // backgroundcolor="red"
            alignItems={"center"}
            // justifyContent={"center"}
            gap={1}
            margin=""
          >
            <AttractionsIcon sx={{ paddingTop: "0px" }} />
            Tam Tree
          </Title>
          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 0.6 }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: "#ffff" }}>
                {item.icon}
                <ListItemText>{item.label}</ListItemText>
              </Button>
            ))}
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleLeftDrawerOpen}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Main></Main>

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
        <DrawerHeader>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,display:"flex", alignItems:"center" }}>
            <AttractionsIcon sx={{ padding: "4px" }} />
            Tam Tree
          </Typography>
          <IconButton onClick={handleRightDrawerClose}>
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
