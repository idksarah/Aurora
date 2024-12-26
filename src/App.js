import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="Home" index element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
