
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drawer from "./Drawer";
import InfoStream from "./InfoStream";
import Contact from "./Contact";
import Home from "./Homeimage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drawer />} />
          <Route path="/1" element={<InfoStream/>} />
        </Routes>
      </BrowserRouter>
      <Contact />
      <Home/>
      {/* <Drawer/> */}
    </div>
  );
}

export default App
