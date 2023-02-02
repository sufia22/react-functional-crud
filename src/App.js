import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Pages/Add/Add";
import Edit from "./Pages/Edit/Edit";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
