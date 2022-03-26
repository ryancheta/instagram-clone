import React, { Component } from "react";
import { render } from "react-dom";
import "./style.scss";
import MainFeed from "./src/components/MainFeed";
import Post from "./src/components/Post/Post";
import posts from "./posts.js";
import TabBar from "./src/components/TabBar/TabBar";
import NavBar from "./src/components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './src/routes';

export const App = ({ children }) => {
  return (
    <>
      <NavBar />
      <MainFeed className="main-feed" />
      <TabBar />
    </>
  );
};

const MainApp = (
  <Router>
    <Routes>
      <App />
    </Routes>
  </Router>
);

render(MainApp, document.getElementById("root"));
