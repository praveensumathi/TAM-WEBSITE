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
import Preloader from "./Preloader";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#a6110a",
        contrastText: "#fff",
        darker: "#053e85",
      },
      secondary: {
        main: "#b3c4a5",
      },
    },
    typography: {
      h5: {
        color: "#191de6",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              background: "#00bcd4",
              contrastText: "#fff",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "&:hover": {
              boxShadow: "1px 1px 10px #05fa5b",
            },
          },
        },
      },
    },
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
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
}
export default App;
