import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/navigation/Navbar";
import FullScreenNav from "./components/navigation/FullScreenNav";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agence />} />
        <Route path="/work" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
