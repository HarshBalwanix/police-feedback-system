"use client";
import Header from "@/Components/Header";
import Register from "@/Components/Register";
import { userOption } from "@/utils/constant";
import React from "react";
const page = () => {
  return (
    <div>
      {/* <Header options={userOption} /> */}
      <Register />
    </div>
  );
};

export default page;
