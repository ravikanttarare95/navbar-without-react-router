import React from "react";
import Navbar from "./Navbar.jsx";

function Home() {
  return (
    <>
      <Navbar activeMenu="/" />
      <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
      </div>
    </>
  );
}

export default Home;
