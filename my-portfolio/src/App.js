import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import LandingPage from "./LandingPage/LandingPage";
import Resume from "./Resume/Resume";
import "./App.css";
import { Tooltip } from "@mui/material";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Experience from "./Experience/Experience";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="resume" element={<Resume />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
      <Tooltip title="Chat with developer">
        <ChatBubbleIcon className="chatIcon" />
      </Tooltip>
    </div>
  );
};

export default App;
