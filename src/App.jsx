import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import SisEI from "./components/SisEI";
import BT from "./components/BT";
import PortArq from "./components/PortArq";
import NavbarY from "./components/NavbarY";


const Main = () => <><NavbarY showImage={false} /><Home /></>;
const SEI = () => <><NavbarY /><SisEI /></>;
const BuenTreino = () => <><NavbarY /><BT /></>;
const PortfolioArq = () => <><NavbarY/><PortArq /></>;
function App() {
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      
      <Routes>
        <Route path="/PortfolioDev" element={<Main />} />
        <Route path="/PortfolioDev/SEI" element={<SEI />} />
        <Route path="/PortfolioDev/BuenTreino" element={<BuenTreino />} />
        <Route path="/PortfolioDev/PortfolioArq" element={<PortfolioArq />} />
      </Routes>
    </>
  );
}

export default App;
