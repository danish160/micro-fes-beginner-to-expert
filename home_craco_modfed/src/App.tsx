import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <a>Fidget Spinner World</a>
          <div className="mx-5">|</div>
          <a id="cart">Cart</a>
        </div>
        <div className="flex-end relative"></div>
      </div>
    </div>
  );
}

export default App;
