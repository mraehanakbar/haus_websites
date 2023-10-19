import { HomePage, Karir, AboutPage, Bigorder, Lokasi } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        ></link>
      </head>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
