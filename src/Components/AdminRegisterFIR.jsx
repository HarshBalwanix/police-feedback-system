"use client";
import React, { useState } from "react";

const AdminRegisterFIR = () => {
  const [userId, setUserId] = useState("");
  const [firTitle, setFIRTitle] = useState("");
  const [firDescription, setFIRDescription] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Perform your API call to register FIR here
    try {
      const response = await fetch("http://localhost:3005/fir/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          firTitle,
          firDescription,
        }),
      });

      if (response.ok) {
        // FIR registration successful
        console.log("FIR registered successfully!");
        // You can add further actions or redirection if needed
      } else {
        // Handle FIR registration error
        const data = await response.json();
        console.error("FIR registration failed:", data.message);
      }
    } catch (error) {
      console.error("Error during FIR registration:", error);
    }
  };

  return (
    <main className="container mx-auto p-4">
      <div className="bg-white p-8 max-w-xl mx-auto rounded-md shadow-md">
        <div className="text-3xl font-bold mb-4 text-green-500">
          FIR Registration
        </div>
        <form className="max-w-full" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="userId"
              className="block text-sm font-semibold mb-2"
            >
              User ID:
            </label>
            <input
              type="text"
              className="form-input w-full under-label bg-gray-100 p-1"
              id="userId"
              name="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="firTitle"
              className="block text-sm font-semibold mb-2"
            >
              FIR Title:
            </label>
            <input
              type="text"
              className="form-input w-full under-label bg-gray-100 p-1"
              id="firTitle"
              name="firTitle"
              value={firTitle}
              onChange={(e) => setFIRTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="firDescription"
              className="block text-sm font-semibold mb-2"
            >
              FIR Description:
            </label>
            <textarea
              className="form-textarea w-full bg-gray-100 p-1"
              id="firDescription"
              name="firDescription"
              value={firDescription}
              onChange={(e) => setFIRDescription(e.target.value)}
              rows="3"
              required
            />
          </div>

          <div className="flex items-center">
            <button
              type="submit"
              className="border-2 border-green-500 text-green-500 px-4 py-2 rounded mx-auto hover:bg-green-500 hover:text-white"
            >
              Register FIR
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AdminRegisterFIR;
