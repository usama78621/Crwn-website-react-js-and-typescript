import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import ShopItem from "./components/ShopItem/Shop-item";
import Homepages from "./pages/homePages/homepage";


function App() {
 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepages />}></Route>
        <Route path="/shop" element={<ShopItem />}></Route>
      </Routes>
    </div>
  );
}

export default App;
