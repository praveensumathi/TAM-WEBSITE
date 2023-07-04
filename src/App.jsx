import Resource from "./Resource";
import React, { useEffect, useState } from "react";
// import Drawer from "./Drawer";
import InfoStream1 from "./InfoStream1";
import Testimonial from "./Testimonial";
import About from "./About";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "./Drawer";
import Contact from "./Contact";
import Home from "./Homeimage";
import HomePage from "./HomePage";
import Preloader from "./PreLoader";
import { ThemeProvider, createTheme,  } from "@mui/material/styles";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  const theme = createTheme({
    //   components: {
    //     MuiButton: {
    //       styleOverrides: {
    //         root: ({ ownerState }) => ({
    //           ...(ownerState.variant === "contained" &&
    //             ownerState.color === "primary" && {
    //               backgroundColor: "#202020",
    //               color: "#fff",
    //             }),
    //         }),
    //       },
    //     },
    //   },
    palette: {
      primary: {
        main: "#f8fc03",
      },
      secondary: {
        main: "#f8fc03",
      },
    },

    typography: {
      h5: {
        color: "green",
        fontWeight: "bold",
      },
      body3: {
        color: "red",
      },
      one: {
        color: "red",
      },
    },
  });

  return (
    <div>
      <CssBaseline />
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <ThemeProvider theme={theme}>
            <Drawer />
            
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};
export default App;
