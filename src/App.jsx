import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
