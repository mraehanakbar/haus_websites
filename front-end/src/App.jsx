import { Karir } from "./pages";
import { AboutPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/karir" element={<Karir />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
