import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./navbar/Home"
import Bollywood from "./navbar/Bollywood"
import Technology from "./navbar/Technology"
import Hollywood from "./navbar/Hollywood"
import Fitness from "./navbar/Fitness"
import Food from "./navbar/Food"
import Logo from "./logo/Logo";
import ContextApi from "./contextapi/Store";

function App() {
  return (
    <BrowserRouter>
      <Logo />
      <Navbar />
      <ContextApi>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Bollywood"} element={<Bollywood />} />
        <Route path={"/Technology"} element={<Technology />} />
        <Route path={"/Hollywood"} element={<Hollywood />} />
        <Route path={"/Fitness"} element={<Fitness />} />
        <Route path={"/Food"} element={<Food />} />
      </Routes>
      </ContextApi>
    </BrowserRouter>
  );
}
  
export default App;
