import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <div>
    <Header />
    <App />
    <Footer />
  </div>,
  document.getElementById("root")
);
