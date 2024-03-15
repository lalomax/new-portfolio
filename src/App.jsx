import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogArchive from "./pages/BlogArchive";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogArchive />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
