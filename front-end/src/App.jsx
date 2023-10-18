import { Karir, AboutPage, Bigorder } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/bigorder" element={<Bigorder />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/karir" element={<Karir />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
