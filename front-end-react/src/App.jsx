import { HomePage, Karir, AboutPage, Bigorder, Lokasi, Menu } from "./pages";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
