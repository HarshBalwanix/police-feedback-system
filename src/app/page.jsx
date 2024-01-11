"use client";
import React from "react";
// import "./App.css";
import Image from "next/image";
import Chatbot from "@/Components/Chatbot";

// import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <body>
        <nav className="bg-white text-center py-5 flex flex-wrap justify-center gap-4 sticky top-0">
          <div>
            <Image src={"/logo.png"} width={50} height={50} />
          </div>
          <div>
            <h1 className="text-green-500 text-5xl text">Rajasthan Police</h1>
            <p className="text-xl font-semibold  mt-3">Feedback System</p>
          </div>
        </nav>

        <main className="mt-20 flex justify-center">
          <div className="rounded-2xl shadow-2xl flex justify-center w-1/3 max-w-4xl bg-white">
            <div className="flex flex-col w-60">
              <button
                // onClick={() => {
                //   window.location.href = "./register/page.jsx";
                // }}
                className="py-10 my-4 bg-white font-semibold text-xl rounded-3xl text-green-500  border-2 border-green-500 hover:bg-green-500 hover:text-white"
              >
                Citizen
              </button>
              <button className="py-10 my-4 bg-white  font-semibold text-xl rounded-3xl text-green-500  border-2 border-green-500 hover:bg-green-500 hover:text-white">
                Police Station
              </button>
              <button className="py-10 my-4 bg-white text-green-500  border-2 border-green-500 font-semibold text-xl rounded-3xl hover:bg-green-500 hover:text-white">
                Higher Authority
              </button>
            </div>
          </div>
        </main>
      </body>
      <Chatbot />
    </>
  );
}
