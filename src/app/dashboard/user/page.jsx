"use client";
import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

import Abilities from "@/Components/Abilities";

const Dashboard = () => {
  return (
    <>
      {/* <Header /> */}
      <div>
        <Abilities />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
