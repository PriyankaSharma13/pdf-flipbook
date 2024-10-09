import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/Home";
import FeaturePage from "./pages/FeaturePage/Feature";
import Addons from "./pages/AddonsPage/Addons";
import Documentation from "./pages/Documentation/Documentation";


const App = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
          <Route path="/feature" element={<FeaturePage/>} />
          <Route path="/addons" element={<Addons/>} />
          <Route path="/documentation" element={<Documentation/>} />
        </Route>
      </Routes>
    </BrowserRouter>
);

export default App;

