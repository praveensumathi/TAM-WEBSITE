import Drawer from "./Drawer";
import Techonologies from "./techonologies";
// import InfoStream from "./InfoStream";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Drawer/>
        <Routes>
          <Route path="/" element={<Drawer />} />  *
          <Route path="/" element={<Techonologies/>} />
        </Routes>
      </BrowserRouter> */}

      <Drawer />
      {/* <Techonologies/> */}
    </div>
  );
}

export default App;
