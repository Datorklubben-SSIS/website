import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
