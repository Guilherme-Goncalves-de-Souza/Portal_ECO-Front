import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";

// PAGES:
import Home from "./pages//Home/Home";
import Noticias from "./pages/Noticias/Noticias";
import Palestras from "./pages/Palestras/Palestras";
import Doe from "./pages/Doe/Doe";
import Dicas from "./pages/Dicas/Dicas";


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palestras" element={<Palestras />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/doe" element={<Doe />} />
        <Route path="/dicas" element={<Dicas />} />
      </Routes>
    </Router>
  );
}

export default App;