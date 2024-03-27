import React from "react";
import { useState } from "react";
import NavBar from "./fragments/NavBar";
import Footer from "./fragments/Footer";
import DaysTab from "./pages/DaysTab";

import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <DaysTab />
      <Link to="/forkpage" className="btn btn-outline-primary">
        Fork
      </Link>
      <Footer />
    </>
  );
}
