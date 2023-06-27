

import Resource from "./Resource";
import React from "react";
import Drawer from "./Drawer";
import InfoStream1 from "./InfoStream1";
import Testimonial from "./Testimonial";
import About from "./About";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "./Drawer";
import Contact from "./Contact";
import Home from "./Homeimage";
import Techonologies from "./techonologies";

function App() {
  return (
    <div>
      <CssBaseline/> 
      <Drawer />
      <Home />
      <InfoStream1 />
      <Resource/>
      {/* <Testimonial /> */}
      <Contact />
      {/* <About/> */}
    </div>
  );
}

export default App;
