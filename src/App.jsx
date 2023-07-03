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


function App() {
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
          <Drawer />
        </div>
      )}
    </div>
  );
};
export default App;
