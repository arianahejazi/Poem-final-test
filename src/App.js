import React, { Component }  from 'react';

import PoemList from "./Pages/PoemList/PoemList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PoemDetails from "./Pages/PoemDetail/PoemDetail";
import Favourite from "./Pages/Favourite/Favourite";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/:title" element={<PoemDetails />} />
        <Route exact path="/my-favorite" element={<Favourite />} />
        <Route exact path="/" element={<PoemList />} />
      </Routes>
    </Router>
  );
}

export default App;