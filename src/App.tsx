import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";

import { Routes, Route } from "react-router-dom";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </>
  );
}

export default App;
