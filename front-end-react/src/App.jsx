import { HomePage, Karir, AboutPage, Bigorder, Lokasi, Menu, PostPage, PostPost } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<AboutPage />} />
          <Route path="/lokasi" element={<Lokasi />} />
          <Route path="/bigorder" element={<Bigorder />} />
          <Route path="/karir" element={<Karir />} />
          {/* test integrating */}
          <Route path="/test" element={<PostPage />} />
          <Route path="/test/post" element={<PostPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
