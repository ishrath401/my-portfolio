import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import LandingPage from "./LandingPage/LandingPage";
import Resume from "./Resume/Resume";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
