import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drawer from "./Drawer";
import InfoStream1 from "./InfoStream1";
import Testimonial from "./Testimonial";
import About from "./About";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div>
      <CssBaseline/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drawer />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Drawer/> */}
      <InfoStream1 />
      {/* <Testimonial /> */}
      {/* <About/> */}
    </div>
  );
}

export default App
